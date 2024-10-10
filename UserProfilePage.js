import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Profile Header Component
const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        {/* Add back button functionality */}
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Tutor Profile</Text>
      <TouchableOpacity>
        {/* Dark Mode Icon (Placeholder) */}
        <Text style={styles.darkModeIcon}>🌙</Text>
      </TouchableOpacity>
    </View>
  );
};

// User Info Component
const UserInfo = () => {
  return (
    <View style={styles.userInfo}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Cristinan John</Text>
      <Text style={styles.userLocation}>Canada</Text>
      <Text style={styles.userBio}>
        A user profile is a collection of settings and info with a user. It contains critical information that is used to identify an individual.
      </Text>
      <View style={styles.stats}>
        <Text style={styles.statItem}>46 Talks</Text>
        <Text style={styles.statItem}>46K Followers</Text>
        <Text style={styles.statItem}>20M Watch Min</Text>
      </View>
    </View>
  );
};

// Video Tab Content
const VideosTab = () => {
  const videos = [
    { title: 'Science and Evolution', thumbnail: 'https://placeimg.com/640/480/nature' },
    { title: 'Fitness', thumbnail: 'https://placeimg.com/640/480/tech' },
    { title: 'Web Design', thumbnail: 'https://placeimg.com/640/480/arch' },
    { title: 'Gaming', thumbnail: 'https://placeimg.com/640/480/people' },
    { title: 'Art', thumbnail: 'https://placeimg.com/640/480/animals' },
    { title: 'Politics', thumbnail: 'https://placeimg.com/640/480/business' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.videoGrid}>
      {videos.map((video, index) => (
        <TouchableOpacity key={index} style={styles.videoCard}>
          <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
          <Text style={styles.videoTitle}>{video.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// Tabs Navigator
const Tab = createBottomTabNavigator();

const ProfileTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Videos" component={VideosTab} />
      {/* Placeholder for additional tabs */}
      <Tab.Screen name="Documents" component={VideosTab} />
      <Tab.Screen name="About" component={VideosTab} />
    </Tab.Navigator>
  );
};

// Main Profile Screen Component
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <UserInfo />
      <ProfileTabs />
    </View>
  );
};

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <ProfileScreen />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6200ea',
  },
  backButton: {
    padding: 5,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkModeIcon: {
    fontSize: 18,
    color: '#fff',
  },
  userInfo: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userLocation: {
    fontSize: 14,
    color: 'gray',
  },
  userBio: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  statItem: {
    fontSize: 14,
    color: 'gray',
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  videoCard: {
    width: '45%',
    marginBottom: 15,
  },
  videoThumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  videoTitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});
