import axios from 'axios';
export const getChannelList = async () => {
  return await axios.get(
    'https://itvepg10013.tmp.tivibu.com.tr/iptvepg/frame3046/sdk_getchannellist.jsp;jsessionid=B43BDBA31C68506E55EF61B91E696F83?columncode=000000&numperpage=500&ordertype=1&isqueryfavorite=1&ischecklock=1&isqueryprevue=1',
  );
};
export const getLiveBroadcast = async video => {
  console.log(
    'deneme ',
    `https://itvepg10013.tmp.tivibu.com.tr/iptvepg/frame3046/sdk_getppvtvplayurl.jsp;jsessionid=7A3045B59E33775863DD9316B21B3F0B?channelcode=${video}columncode=000000&playtype=0&urlredirect=1&productcode=5239`,
  );
  return await axios.get(
    `https://itvepg10013.tmp.tivibu.com.tr/iptvepg/frame3046/sdk_getppvtvplayurl.jsp;jsessionid=7A3045B59E33775863DD9316B21B3F0B?channelcode=${video}&columncode=000000&playtype=0&urlredirect=1&productcode=5239`,
  );
};
