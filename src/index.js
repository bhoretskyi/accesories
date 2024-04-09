import axios from 'axios';
axios
  .get('https://66116f6495fdb62f24ed2aaf.mockapi.io/aks/aks/999')
  .then(resp => console.log(resp.data));
