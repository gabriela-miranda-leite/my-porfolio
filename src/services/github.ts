import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const DataGithub = {
  async getData() {
    return api
      .get(`/users/Gabriela-Leite/repos`)
      .then(async response => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: 'Erro ao buscar informações do Github',
          data: [],
        };
      })
      .catch(error => ({
        ok: false,
        data: error.response?.data,
        message: 'Erro ao buscar informações do Github',
      }));
  },
};

export default DataGithub;
