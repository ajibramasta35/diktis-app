import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

// import Text from '../assets/fonts'

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowheight = Dimensions.get('window').height;
  const carWidth = windowWidth;
  const carHeight = windowWidth / 2;
  const searchWidth = windowWidth * 0.9;

  const navigation = useNavigation();

  const handleCardPress = (url) => {
    navigation.navigate('WebViewScreen', { url });
  };

  const handleProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const card_template2 = {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: getRandomColor(),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  };

  const carouselItems = [
    {
      image: require('../assets/img/bannerdiktis1.png'),
    },
    {
      image: require('../assets/img/bannerdiktis2.png'),
    },
    {
      image: require('../assets/img/app1.png'),
    },
    // Tambahkan item carousel lainnya sesuai kebutuhan
  ];

  const AplikasiItems = [
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'Moraref, Morabase, Morabin',
    },
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'KIP',
    },
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'Sarpras',
    },
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'PAK & Serdos',
    },
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'Prodi Baru',
    },
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'Kerjasama',
    },
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'Bantuan Kemahasiswaan',
    },
    {
      image: require('../assets/img/app2.png'),
      NamaAplikasi: 'Program BIB-LPDP',
    },

    // Tambahkan item carousel lainnya sesuai kebutuhan
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.carouselItem, { width: carWidth }]}>
        <Image
          style={[
            styles.carouselImage,
            { width: carWidth / 1.05, height: carWidth / 2 },
          ]}
          source={item.image}
        />
      </TouchableOpacity>
    );
  };

  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(AplikasiItems);

  // scroll on refresh
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 300);
  }, []);

  const handleSearch = () => {
    // Fungsi Filter aplikasi
    const filtered = AplikasiItems.filter((item) =>
      item.NamaAplikasi.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredItems(filtered);
  };

  // Fungsi clear form
  const clearSearchText = () => {
    setSearchText('');
  };

  return (
    <>
      <ImageBackground
        style={styles.container1}
        source={require('../assets/img/bgg.png')}
      >
        <ImageBackground
          style={styles.container2}
          source={require('../assets/img/bg1.png')}
        ></ImageBackground>
        
        <View style={styles.container4}>
          <View style={styles.containerInner1}>
            <TouchableOpacity>
              <Image
                style={styles.icon}
                source={require('../assets/icons/pusakalogo.png')}
              />
            </TouchableOpacity>

            <Text style={styles.Bigtitle}>MINI PUSAKA</Text>

            <TouchableOpacity onPress={handleProfile}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/User.png')}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.containerInner3}>
            <TextInput
              style={[styles.input, { width: searchWidth }]}
              onChangeText={(text) => {
                setSearchText(text);
                handleSearch(text); // Panggil fungsi handleSearch setiap kali teks berubah
              }}
              placeholder="Cari aplikasi.."
              clearButtonMode="always"
              value={searchText}
              onSubmitEditing={handleSearch}
            />
            {searchText !== '' && (
              <TouchableOpacity
                onPress={clearSearchText}
                style={styles.clearButton}
              >
                <Text style={styles.clearButtonText}>Hapus</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={[styles.container3]}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <Carousel
              data={carouselItems}
              renderItem={renderItem}
              sliderWidth={carWidth}
              itemWidth={carWidth}
              autoplay={true}
              autoplayInterval={4000}
              loop={true}
            />
            <View style={styles.containerInner2}>
              <Text style={styles.subtitle}>Pilihan Aplikasi</Text>
            </View>
            <View
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 45,
                alignItems: 'center',
                width: '100%',
              }}
            >
              <View style={styles.container_menu}>
                <View style={styles.row_container1}>
                  {filteredItems.map((item, index) => {
                    if (index < Math.ceil(filteredItems.length / 2)) {
                      return (
                        <TouchableOpacity
                          style={card_template2}
                          key={index}
                          onPress={() => handleCardPress(item.url)}
                        >
                          <Image
                            style={styles.gambar_menu}
                            source={item.image}
                          />
                          <View style={styles.text_container}>
                            <Text style={styles.card_title}>
                              {item.NamaAplikasi}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }
                    return null;
                  })}
                </View>
                <View style={styles.row_container2}>
                  {filteredItems.map((item, index) => {
                    if (index >= Math.ceil(filteredItems.length / 2)) {
                      return (
                        <TouchableOpacity
                          style={card_template2}
                          key={index}
                          onPress={() => handleCardPress(item.url)}
                        >
                          <Image
                            style={styles.gambar_menu}
                            source={item.image}
                          />
                          <View style={styles.text_container}>
                            <Text style={styles.card_title}>
                              {item.NamaAplikasi}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }
                    return null;
                  })}
                </View>
              </View>
            </View>

            {/* Pilihan 2 */}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 0.4,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#0ADBBB',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // paddingHorizontal: 10,
    zIndex: 1,
  },

  container4: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    // flex: 1,
    alignItems: 'center',
    zIndex: 10,
  },

  containerInner1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10,
    // backgroundColor:'red',
  },
  containerInner2: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerInner3: {
    paddingBottom: 10,
  },
  container3: {
    flex: 1,
    height: '100%',
    width: '100%',
    // backgroundColor: '#407AFF',
    // alignItems: 'center',
    // paddingHorizontal: 15,
    paddingTop: 15,
    zIndex: 10,
  },

  container_menu: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    // marginTop: 10,
    // alignItems:'center',
  },

  firstImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  carouselContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    // paddingHorizontal:50,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // paddingHorizontal: 10,
    alignSelf: 'center',
  },
  carouselImage: {
    resizeMode: 'cover',
    borderRadius: 15,
    // width: '100%',
    // maxHeight: 150,
    backgroundColor: 'blue',
  },

  row_container1: {
    width: '50%',
    alignItems: 'center',
    width: isTablet ? '25%' : '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 25,
    borderTopLeftRadius: 30,

    // margin:0,
  },

  row_container2: {
    width: '50%',
    alignItems: 'center',
    width: isTablet ? '25%' : '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    borderTopRightRadius: 30,
    paddingRight: 20,
    paddingTop: 25,

    // margin:0,
  },

  Bigtitle: {
    fontSize: 18,
    color: '#FAFAFA',
    fontFamily: 'Raleway-Bold',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    paddingTop: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 600,
  },
  subtitle2: {
    paddingTop: 20,
    fontSize: 12,
    color: '#138573',
    fontWeight: 300,
  },

  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  card_template: {
    width: '100%',
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card_image: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  card_template2: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#2E5FCE',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  gambar_menu: {
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  card_image2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text_container: {
    position: 'absolute',
    width: '90%',
    height: 40,
    bottom: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderRadius: 10,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card_title: {
    color: '#010E2D',
    fontFamily: 'Raleway-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'black',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingRight: 10,
  },
  clearButtonText: {
    color: 'blue',
  },
});

export default HomeScreen;
