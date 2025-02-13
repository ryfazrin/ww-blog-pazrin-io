import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';
import { useEffect } from 'react';

export const Profile = () => {
  useEffect(() => {
      if (typeof window !== 'undefined' && (window as any).twttr) {
        (window as any).twttr.widgets.load();  // Memuat widget Twitter setelah komponen dirender
      }
    }, []);
  
    const sendEvent = () => {
      (window as any).fbq('track', 'PageView');
    }
  
    const gtmPush = () => {
      const data = { event: 'button-click', some: { data: true } };
      console.log('dataLayer.push()');
      (window as any).dataLayer.push(data);
    }
  
    return (
      <div className="select-none vstack items-center gap-5 p-6 bg-primary-1">
        <div className="vstack items-center gap-2">
          <Image
            className="object-cover w-28 h-28 rounded-full"
            alt="avatar"
            src="/assets/author.png"
          />
          <h1 className="text-2xl font-semibold text-primary-1">Next.js</h1>
        </div>

        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          {/* Google Tag Manager */}
          <div>
            <button className="button" onClick={gtmPush}>dataLayer.push()</button>
          </div>
          {/* Facebook Pixel */}
          <div>
            <button className="button" onClick={sendEvent}>fbq track & PageView</button>
          </div>
          {/* Embed Tweet */}
          <div>
            {/* <Image src="/heroImage.jpg" alt="teamwork on web services" width="1332px" height="354px"/> */}
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Just setting up my Twitter. #myfirstTweet
              </p>
              &mdash; Twitter Dev (@TwitterDev) <a href="https://twitter.com/ryfazrin/status/1504760897176174595">February 8, 2025</a>
            </blockquote>

            {/* Embed Timeline */}
            <a
              className="twitter-timeline"
              data-width="550"
              data-height="400"
              href="https://twitter.com/ryfazrin/status/1504760897176174595"
            >
              Tweets by TwitterDev
            </a>
          </div>
        </section>

        <p className="text-primary-1">
          Modern JavaScript Framework: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching...
        </p>

        <div className="flex gap-4">
          {sns.map(({ href, icon, label }) => (
            <Link key={href} href={href} passHref>
              <a className="text-primary-1" aria-label={label}>
                {icon}
              </a>
            </Link>
          ))}
        </div>
      </div>
    );
};
