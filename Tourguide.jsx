import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Profile from '../bottom/Profile';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Wishlist from '../bottom/Wishlist';
import Cart from '../bottom/Cart';


const Home = () => {
  const [selectedTab, setSelectedTab] = useState(4);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (<Main/>
      ):
      (selectedTab == 1)? (<Search/>
      ):
      (selectedTab == 2)? (<Cart/>
      ):
      (selectedTab == 3)? (<Wishlist/>
      ):
      (selectedTab == 4)? (<Profile/>
      ):(
      <Profile/>
      )}

{/* ===---Button 0----==== */}
      <View style={styles.bottomTabs}>
        <TouchableOpacity
         style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: selectedTab == 0 ? '#d3d3d3' : '#fff',
          opacity:1.0,
          borderRadius: 50,
        }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

{/*===---- Button 1---====*/}
        <TouchableOpacity
          // style={styles.bottomTabButton}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedTab == 1 ? '#d3d3d3' : '#fff',
            opacity:1.0,
            borderRadius: 50,
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

{/*===---Button 2---==== */}
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedTab == 2 ? '#d3d3d3' : '#fff',
            opacity:1.0,
            borderRadius: 50,
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
            <View style={{backgroundColor:'#fff', borderRadius:12
          ,width:27, height:27}}>
          <Image
            source={require('../images/bag.png')}
            style={{
              width: 24,
              height: 24,
              opacity:4.0,
              tintColor: 'black',
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 13,
              left: 16,
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>5</Text>
          </View>
          </View>
        </TouchableOpacity>
       
{/* //===----Button 3----==== */}
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedTab == 3 ? '#d3d3d3' : '#fff',
            opacity:1.0,
            borderRadius: 50,
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

{/* ====---- Button 4---==== */}
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedTab == 4 ? '#d3d3d3' : '#fff',
            opacity:1.0,
            borderRadius: 50,
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../images/user.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabs: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5,
  },
  bottomTabButton: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  bottomTabIconCenter: {},
});
