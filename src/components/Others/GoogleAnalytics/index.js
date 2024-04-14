/* eslint-disable @next/next/next-script-for-ga */
const GoogleAnalytics = ({ src, stringified }) => (
  <>
    <script
      async
      src={src}
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: stringified,
      }}
    ></script>
  </>
);

export default GoogleAnalytics;