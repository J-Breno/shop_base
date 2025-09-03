import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { useState } from "react";
import axios from "axios";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!');
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button 
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Em produção, busca apenas alguns produtos ou nenhum para fallback
  if (process.env.NODE_ENV === 'production') {
    return {
      paths: [],
      fallback: true,
    }
  }

  // Em desenvolvimento, busca os produtos
  try {
    const products = await stripe.products.list({
      limit: 3, // Apenas os primeiros 3 para desenvolvimento
    });

    const paths = products.data.map(product => ({
      params: {
        id: product.id,
      }
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params.id as string;

  try {
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price.unit_amount / 100),
          description: product.description,
          defaultPriceId: price.id,
        }
      },
      revalidate: 60 * 60 * 2, // 2 hours
    };
  } catch (error) {
    // Se o produto não for encontrado, retorna 404
    if (error.statusCode === 404) {
      return {
        notFound: true,
      };
    }

    // Re-throw outros erros
    throw error;
  }
}