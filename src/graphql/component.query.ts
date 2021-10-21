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
        url
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
      apis(sort: "title:asc") {
      	id
        title
        description
        items(sort: "property:asc") {
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
