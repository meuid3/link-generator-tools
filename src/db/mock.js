/**
 * ícones: https://www.flaticon.com/br/autores/flaticons/flat-circular?author_id=190&type=standard
 */
export const data = {
  acessos: [
    {
      id: 1,
      projeto: 'SGE',
      urls: [
        {
          nome: 'local',
          caminho: 'https://feature-es-api-auth.devops.grancursosonline.com.br/ms-campus/v1/auth/authorization/${email}?xclient=JDJ5JDEwJEJqck9NVE5SYXFMQ1RFMTF3QlM4ZWVuOHpRQkhTV3RLZmYyUmVBREhnVUd1Wmo4LmZxMUFX&redirect_url=http://localhost:${porta}/autenticar?code='
        },
        {
          nome: 'branch',
          caminho: 'https://feature-es-api-auth.devops.grancursosonline.com.br/ms-campus/v1/auth/authorization/${email}?xclient=JDJ5JDEwJEJqck9NVE5SYXFMQ1RFMTF3QlM4ZWVuOHpRQkhTV3RLZmYyUmVBREhnVUd1Wmo4LmZxMUFX&redirect_url=https://${tipo}-${branch}.devops.grancursosonline.com.br/autenticar?code='
        },
        {
          nome: 'dev',
          caminho: 'https://feature-es-api-auth.devops.grancursosonline.com.br/ms-campus/v1/auth/authorization/${email}?xclient=JDJ5JDEwJEJqck9NVE5SYXFMQ1RFMTF3QlM4ZWVuOHpRQkhTV3RLZmYyUmVBREhnVUd1Wmo4LmZxMUFX&redirect_url=https://sge-dev.grancursosonline.com.br/autenticar?code='
        }
      ],
      ativo: true
    },
    {
      id: 2,
      projeto: 'CAMPUS',
      urls: [
        {
          nome: 'local',
          caminho: 'https://feature-es-api-auth.devops.grancursosonline.com.br/ms-campus/v1/auth/authorization/${email}?xclient=JDJ5JDEwJG0zdEhFbUNzTE5Xemc5bXdWelpkWS4uaHl4ZTM0RnF3dVozTWxiWThTLlk3RVBJbS55dGtD'
        },
        {
          nome: 'branch',
          caminho: 'https://feature-es-api-auth.devops.grancursosonline.com.br/ms-campus/v1/auth/authorization/${email}?xclient=JDJ5JDEwJG0zdEhFbUNzTE5Xemc5bXdWelpkWS4uaHl4ZTM0RnF3dVozTWxiWThTLlk3RVBJbS55dGtD&redirect_url=https://${tipo}-${branch}.devops.grancursosonline.com.br/graduacao/autenticar/'
        },
        {
          nome: 'dev',
          caminho: 'https://feature-es-api-auth.devops.grancursosonline.com.br/ms-campus/v1/auth/authorization/${email}?xclient=JDJ5JDEwJG0zdEhFbUNzTE5Xemc5bXdWelpkWS4uaHl4ZTM0RnF3dVozTWxiWThTLlk3RVBJbS55dGtD&redirect_url=https://aluno-dev.grancursosonline.com.br/graduacao/autenticar/'
        }
      ],
      ativo: true
    },
    {
      id: 3,
      projeto: 'BACKOFFICE',
      urls: [
        {
          nome: 'local',
          caminho: 'http://localhost:${porta}'
        },
        {
          nome: 'dev',
          caminho: 'https://pos-backoffice-dev.grancursosonline.com.br/'
        }
      ],
      ativo: false
    },
    {
      id: 4,
      projeto: 'POS-AVA',
      urls: [
        {
          nome: 'dev',
          caminho: 'https://dev.grancursosonline.com.br/identificacao?action-url-retorno=%2Faluno%2Fpainel'
        },
      ],
      ativo: false
    },
  ],
  ambientes: [
    {
      id: 1,
      nome: 'SGE'
    },
    {
      id: 2,
      nome: 'CAMPUS'
    },
    {
      id: 3,
      nome: 'BACKOFFICE'
    },
    {
      id: 4,
      nome: 'AVA'
    },
  ]
}