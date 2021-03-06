import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import client from '../apolloClient';
import { gql } from '@apollo/client';
import Nav from '../components/Nav';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  const [total, setTotal] = useState(0);
  const [displayItem, setDisplayItem] = useState(sampleProduct);

  const timeline = gsap.timeline();
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }

    setDisplayItem(sampleProduct);
    timeline
      .from('#featured', {
        y: 600,
        ease: 'back.inOut(1.4)',
        duration: 1,
        opacity: 0,
      })
      .from('#card', {
        y: 600,
        ease: 'back.inOut(1.4)',
        duration: 1,
        opacity: 0,
        delay: -0.5,
      });
  }, []);

  const displayValue = (product) => {
    const item = { ...product };
    setDisplayItem(item);
  };
  console.log(products);

  return (
    <div className={styles.container}>
      <Head>
        <title>GameShop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
        />
      </Head>

      <Featured product={displayItem} id="featured"></Featured>

      <Nav />

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}></h1>

          <p className={styles.description}>
            {/* <a
              className="snipcart-checkout snipcart-summary"
              href="#"
              style={{ textDecoration: 'none' }}
            >
              <FaShoppingCart />
              <strong className="sr-only">Cart</strong>
              <span className="snipcart-total-price">
                {new Intl.NumberFormat('ja-JP', {
                  style: 'currency',
                  currency: 'JPY',
                }).format(total)}
              </span>
            </a> */}
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => {
            return (
              <a
                href="#"
                key={product.id}
                style={{ listStyle: 'none', textDecoration: 'none' }}
                onClick={() => displayValue(product)}
              >
                <div key={product.id} className={styles.card} id="card">
                  <div className={styles.cardcontainer}>
                    <img
                      src={product.image[0].url}
                      alt={`Preview of ${product.name}`}
                      target="_blank"
                    />
                    <h3>{product.name}</h3>
                    <p className={styles.cardDescription}>
                      {product.description}
                    </p>
                    <p style={{ color: 'maroon' }}>${product.price}</p>
                    <p>
                      <button
                        className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-image={product.image[0].url}
                        data-item-name={product.title}
                        data-item-url="/"
                        data-item-price={product.price}
                      >
                        Add to Cart
                      </button>
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>&copy; GameShop</footer>

      <script
        async
        src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
      />
      <div
        hidden
        id="snipcart"
        data-api-key="MGUzZTIyMzgtMTIzZi00MWU5LTk0MDgtMWE1OWZmZDc3NWJhNjM3NzQ0NDMzMjkyMDM5MTQw"
        data-config-modal-style="side"
        data-config-add-product-behavior="none"
      ></div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        products {
          id
          name
          description
          image {
            id
            url
          }
          price
          details {
            productDetails {
              html
            }
            features {
              feature
            }
          }
          reviews {
            comment
            review
            rating
            user
          }
        }
      }
    `,
  });

  const { products } = data;
  return {
    props: {
      products,
    },
  };
}

const sampleProduct = {
  id: 'ckx3ysax4atqc0c807tdfa0v9',
  name: 'Halo Infinite',
  description: 'Xbox One',
  price: '45.67',
  image: [
    {
      id: 'ckx3ybzq8at1v0a39wpf98iyn',
      url: 'https://media.graphcms.com/IdBOFiwQlylGxcXe7VIY',
    },
  ],
  details: [
    {
      productDetails: [
        {
          html: '<p><strong>GameShop</strong> is excited to bring you <em>Halo Infinite on Xbox One and Xbox Series X!</em> Master Chief is back in his most epic adventure to date. Experience the ultimate gameplay and explore a stunning sci-fi world in this riveting, first person shooter video game. Halo Infinite release date Holiday 2021.</p><p>When all hope is lost and humanity???s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he???s ever faced. The legendary Halo series returns with the most expansive Master Chief story yet.</p>',
        },
      ],

      features: [
        {
          feature:
            'The legendary Halo series returns with the most expansive Master Chief campaign yet.',
        },

        {
          feature:
            'Campaign: When all hope is lost and humanity???s fate hangs in the balance, Master Chief is ready to confront the most ruthless foe he???s ever faced. Begin anew and step inside the armor of humanity???s greatest hero to experience an epic adventure and finally explore the scale of the Halo ring itself.',
        },

        {
          feature:
            'Multiplayer: Halo???s celebrated multiplayer returns! More information coming later this year (requires Xbox Live Gold on console, membership sold separately).',
        },

        {
          feature:
            'Forge: Halo???s epic content creation tool is back and more powerful than ever. More information coming later this year.',
        },

        {
          feature:
            'Cross-Generation Gaming: Halo Infinite provides an amazing experience across the Xbox One and newer family of consoles as well as PC with stunning graphics and world-class cross-platform play. And, on Xbox Series X as well as supported PCs, enjoy enhanced features like up to 4k resolution at 60FPS in campaign and greatly reduced load times creating seamless gameplay that usher in the next generation of gaming.',
        },
      ],
    },
  ],
  reviews: [
    {
      comment: 'Amazing Graphics!',
      review:
        'This game will be awesome on epic proportions. Updated graphics, sound and environment and with a great protagonist what more could you ask for a definite buy for me.',
      rating: 3.5,
      user: 'Ares Spartan',
    },
    {
      comment: 'Gold with infinite',
      review:
        'The description of the game says that you need Xbox Live Gold to play Halo Infinite multiplayer. I just wanted to clarify for people who do not know this already that you do not need it to play online! The multiplayer is amazing in almost every way. The only main problems that most people have with it is how much everything costs in the store and the progression system but other than that, it is AMAZING!      ',
      rating: 5,
      user: 'iHeartHalo',
    },
    {
      comment: 'Too repetitive and boring',
      review:
        '                         This is my first time completing a Halo campaign. It???s a good-looking game. Both the interiors and exteriors look great. But that???s the best thing about it. The gameplay is sooo repetitive! Basically, go there, fight some bad guys, and push a button. Rinse &amp; repeat over &amp; over again! By the last two boss fights I was so tired of battling the same enemies that I was really sick of the game. Maybe this is all you can expect from a game that???s so heavily focused on the multiplayer aspect. Overall, I just found the game to be uninteresting. I don???t think I???d ever play it again.                     ',
      rating: 2,
      user: 'Scorp3333222111',
    },
  ],
};
