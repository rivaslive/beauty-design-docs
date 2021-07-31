import { gql } from '@apollo/client';

export const GET_COMPONENT_VERSION = gql`
query getProvider($title: String, $version: String) {
    componentes(where: { title: $title, version: { version: $version } }) {
      id
      title
      howToUse
      description
      defaultCode
      version {
        version
      }
      image {
        previewUrl
      }
      ejemplos {
        id
        title
        description
        code
        snack
        imagen {
					name
					url
				}
      }
      apis {
      	id
        title
        description
        items {
          id
          property
          description
          type
          default
        }
      }
  }
}
`;
