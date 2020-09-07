import LafmHttp from '../providers/todoAppHttp';

const Url = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=';

const getImage = (data) => {
  return LafmHttp.get(Url + data);
};

export default { getImage };
