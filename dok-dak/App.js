import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Video } from 'expo-av';

const { height, width } = Dimensions.get('window');

const VIDEOS = [
  { id: '1', user: '@ahmed_baghdad', desc: 'دك دك بطة 🦆 تسبح بالشط - صنع في بغداد', likes: '12.5K', color: '#FF6B6B' },
  { id: '2', user: '@dok_dak_official', desc: 'فديو جديد من الرمادي 😎🔥', likes: '8.2K', color: '#4ECDC4' },
  { id: '3', user: '@iraq_tiktok', desc: 'تحدي الدك دك! منو يكدر يسويها؟', likes: '25K', color: '#45B7D1' },
  { id: '4', user: '@baghdad_vibes', desc: 'احلى فديو اليوم - دك دك', likes: '5.1K', color: '#FFA07A' },
];

export default function App() {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => (
    <View style={[styles.page, { backgroundColor: item.color }]}>
      <View style={styles.center}>
        <Text style={styles.duck}>🦆</Text>
        <Text style={styles.logo}>DOK DAK</Text>
        <Text style={styles.made}>Made in Baghdad</Text>
      </View>
      
      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.user}>{item.user}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <Text style={styles.music}>🎵 Original Sound - DOK DAK</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.iconBtn}>
            <Text style={styles.icon}>{liked[item.id] ? '❤️' : '🤍'}</Text>
            <Text style={styles.count}>{item.likes}</Text>
          </TouchableOpacity>
          <View style={styles.iconBtn}><Text style={styles.icon}>💬</Text><Text style={styles.count}>342</Text></View>
          <View style={styles.iconBtn}><Text style={styles.icon}>↗️</Text><Text style={styles.count}>Share</Text></View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        data={VIDEOS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
      />
      <View style={styles.topBar}>
        <Text style={styles.topText}>Following | For You</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  page: { width, height, justifyContent: 'center', alignItems: 'center' },
  center: { alignItems: 'center', marginTop: -100 },
  duck: { fontSize: 100 },
  logo: { fontSize: 40, fontWeight: 'bold', color: 'white', marginTop: 10 },
  made: { color: 'white', opacity: 0.8, marginTop: 5 },
  bottom: { position: 'absolute', bottom: 40, left: 10, right: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  left: { flex: 1, marginRight: 20 },
  user: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  desc: { color: 'white', marginTop: 5 },
  music: { color: 'white', marginTop: 8, fontSize: 12 },
  right: { alignItems: 'center' },
  iconBtn: { alignItems: 'center', marginBottom: 20 },
  icon: { fontSize: 35 },
  count: { color: 'white', fontSize: 12, marginTop: 3 },
  topBar: { position: 'absolute', top: 50, width: '100%', alignItems: 'center' },
  topText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});