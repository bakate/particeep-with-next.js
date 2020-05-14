import { MamaContext } from '../components/context';
import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <MamaContext>
      <Page>
        <Component {...pageProps} />
      </Page>
    </MamaContext>
  );
}
