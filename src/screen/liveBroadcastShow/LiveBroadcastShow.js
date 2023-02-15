import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
// import axios from 'axios';
import Video from 'react-native-video';
import {getChannelList, getLiveBroadcast} from '../../api/api';
import ChannelDetail from '../../component/channelDetail/ChannelDetail';
import {styles} from './style';
// import Video from 'react-native-video';
// import {FlatList} from 'react-navigation';

const LiveBroadcastShow = () => {
  const [channels, setChannels] = useState();
  const [live, setLive] = useState();
  const video = useRef('ch00000000000000001358');

  const veri = useRef([]);
  // const live = useRef([]);
  const getChannel = async () => {
    const data = await getChannelList();
    setChannels(data.data.data);
  };
  const getLivePlayer = async channelcode => {
    const data = await getLiveBroadcast(channelcode);
    setLive(data.data);
    console.log('live', data.data);
    // veri.current = data.data.data;
  };
  useEffect(() => {
    getChannel();
    // getLivePlayer(video);
  }, []);
  return (
    <View style={{width: 420, height: 315, resizeMode: 'strech'}}>
      <Video
        source={{
          uri: 'http://195.175.224.226:6610/001/2/ch00000090990000001247/index.m3u8?AuthInfo=WlxswM243KMZJx3iMgM2Sb0FaoG2Uhtlw6vU1fuMuyKdaSKNgrhQH%2FixGOQdbxwahkDCFDf4etQuwyAFEDwZgXQS7Fb1YGi0pG%2B7CWeimez11LHgWZZmH7eY0cTUBjWC&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001266&contentid=ch00000000000000001266&videoid=ch00000090990000001247&recommendtype=0&userid=guestphone&boid=001&stbid=E2E209C1-4BEB-4ADC-9C5D-7C28E086ECF5&terminalflag=2&profilecode=&usersessionid=q8Q8nBnaWKZuMWkqOT92qTw140726150&productcode=10000&NeedJITP=1&JITPMediaType=HLS&JITPDRMType=PnKnQclEPwTtPIjmqh2P4iH8lCNFUgc%2Bqionjc%2BIayWupRo3YTygE622ELnB2YrzMQkguHG7leV%2F1xvo%2BgjQzA%3D%3D&RateHigh=5650000&RateLow=500000&IASHttpSessionId=RR10915720230215074112834135&ispcode=75',
        }}
        paused={false}
        controls={true}
        style={{
          ...StyleSheet.absoluteFill,
        }}
      />
    </View>
    // // {console.log('vide', live.httpsplayurl)}
    // <View style={{width: 300, height: 300, resizeMode: 'strech'}}>
    //   <Video
    //     source={{
    //       uri: 'http://195.175.224.227:6610/001/2/ch00000090990000001267/manifest.mpd?AuthInfo=0Ju9ALlSqdqkmSVuBtvASlY2shZ0gsc5S8C3r%2F13LpdyP0BljW8EggnKjzJA3JiplYigx7ZPgvQIgFCAybq6lg%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001358&contentid=ch00000000000000001358&videoid=ch00000090990000001267&recommendtype=0&userid=guestpc&boid=001&stbid=Chrome110&terminalflag=4&profilecode=&usersessionid=0AX81S5aeL30w3kaWPq4x0n136428854&productcode=10000&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=GLLj0uqYzC9neHM1m2xRRwji%2BN71LVvFdqdEeGWY2GxaymLssH4NYavbRUfvBPJKgqnLQtvlhe6DB8ZbEWFtFQ%3D%3D&RateHigh=7000000&RateLow=500000&IASHttpSessionId=RR7985720230214144752746818&ispcode=75',
    //     }}
    //     style={{
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       bottom: 0,
    //       right: 0,
    //     }}
    //     paused={false}
    //     controls={true}
    //   />
    // </View>
  );
};

export default LiveBroadcastShow;

// const styles = StyleSheet.create({});
