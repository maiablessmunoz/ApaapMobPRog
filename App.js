import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// Profile Header Component
const ProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/350115674_298264922526241_7838308114914625662_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGm2kzO7Ij1EM1j3ijAYgUE8O9ZSBKcPQrw71lIEpw9Ch7rnDLT7opt9WC4zYZilv7iqJkBKadFlvK6OrlvVKWA&_nc_ohc=Zbnded96dScQ7kNvgEa2tGV&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=A6e8FndM4e5lr5IymFTaMos&oh=00_AYACreTmgDrfyK5Ct7UGn6PrHx-FZo0IQDH56y1zMUwVAA&oe=670D00E9' }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Maia Bless Muñoz</Text>
      <Text style={styles.profileLocation}>Philippines</Text>
    </View>
  );
};

// User Info Component
const UserInfo = () => {
  return (
    <View style={styles.userInfoContainer}>
      <Text style={styles.userDescription}>
        A student with a dream to become a software engineer. Passionate about coding, innovation, and creating solutions that can make a difference in the world.
      </Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>50</Text>
          <Text style={styles.statLabel}>Talks</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>11M</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>20M</Text>
          <Text style={styles.statLabel}>Watch Min</Text>
        </View>
      </View>
    </View>
  );
};

// Photos Tab (for the photo gallery)
const PhotosTab = () => {
  const photos = [
    { title: 'software engineer', thumbnail: 'https://i.pinimg.com/474x/d9/f7/4b/d9f74bfe3141950735e8340f801c393c.jpg' },
    { title: 'Programmer', thumbnail: 'https://ph.pinterest.com/pin/41165784088713211/' },
    { title: 'Code Design', thumbnail: 'https://i.pinimg.com/564x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.photoGrid}>
      {photos.map((photo, index) => (
        <TouchableOpacity key={index} style={styles.photoCard}>
          <Image source={{ uri: photo.thumbnail }} style={styles.photoThumbnail} />
          <Text style={styles.photoTitle}>{photo.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// Other Tab Components (for example)
const DocumentsTab = () => <View><Text>Documents Section</Text></View>;
const AboutTab = () => <View><Text>About Section</Text></View>;

// Main Profile Tabs with Bottom Navigation
const ProfileTabs = () => {
  return (
    <ScrollView>
      <ProfileHeader />
      <UserInfo />
      <Tab.Navigator>
        <Tab.Screen name="Photos" component={PhotosTab} />
        <Tab.Screen name="Documents" component={DocumentsTab} />
        <Tab.Screen name="About" component={AboutTab} />
      </Tab.Navigator>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <ProfileTabs />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  profileLocation: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  userInfoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  userDescription: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  photoCard: {
    width: '45%',
    marginBottom: 15,
  },
  photoThumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  photoTitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});
