import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import client from '../../utils/client';

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

function SanityImage({ src, width, ...props }) {
  return (
    <Image
      src={urlFor(src).width(width).format('png').url()}
      width={width}
      {...props}
    />
  );
}
export default SanityImage;
