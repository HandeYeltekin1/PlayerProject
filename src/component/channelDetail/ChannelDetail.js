import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

const ChannelDetail = ({item}) => {
  console.log(
    'resim',
    `${item.posterpath}${item.posterfilelist.split(';')[10]}`,
  );
  return (
    <View style={styles.back}>
      <View style={styles.frame}>
        <Image
          style={{width: 30}}
          resizeMode="stretch"
          source={{
            uri: `${item?.posterpath}${item?.posterfilelist.split(';')[18]}`,
          }}
        />
        <Text>{item.channelname}</Text>
        <Text>{item.prevuename}</Text>
        {/* <Text>{item.channelcode}</Text> */}
      </View>
    </View>
  );
};

export default ChannelDetail;
