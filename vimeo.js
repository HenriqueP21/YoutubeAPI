import axios from 'axios';

const API_KEY = 'd0874ad2cfbd8981e7bf630a0f41faef8245721a';

export const buscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos no Vimeo:', erro);
    throw erro;
  }
};
