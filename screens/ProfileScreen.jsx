import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

const DataProfile = [
  {
    image: require('../assets/img/fotoprofil.jpg'),
    nama: 'Ririrn Suhirin',
    status: 'lagi Pingin nyantai aja',
  },
  // Tambahkan item carousel lainnya sesuai kebutuhan
];

const ProfileScreen = () => {
  // Fungsi HandleLogout
  const navigation = useNavigation();

  const handleLogout = () => {
    // Logic untuk proses logut
    navigation.navigate('LoginScreen');
  };

  // Fungsi menampilkan hidden content (Acordion)
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  // Fungsi Modal Keluar Aplikasi
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.containerscroll}>
          <View style={styles.container1}>
            <Image source={DataProfile[0].image} />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.7)', 'transparent']}
              style={styles.gradientOverlay}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.container3}>
              <Image style={styles.profil} source={DataProfile[0].image} />
              <Text style={styles.nama}>{DataProfile[0].nama}</Text>
              <Text style={styles.statussekarang}>{DataProfile[0].status}</Text>
            </View>
            <TouchableOpacity style={styles.container4}>
              <Text>Pengaturan</Text>
              <Image
                style={styles.icon}
                source={require('../assets/icons/chevron.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.container4} onPress={toggleContent}>
              <Text>Tentang Aplikasi</Text>
              <Image
                style={styles.icon}
                source={require('../assets/icons/chevron.png')}
              />
            </TouchableOpacity>
            {showContent && (
              <View style={styles.hiddenContent}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  dignissimos, hic deserunt accusamus facilis consequatur veniam
                  laudantium aspernatur adipisci quaerat.
                </Text>
              </View>
            )}
            <TouchableOpacity style={styles.container4} onPress={toggleModal}>
              <Text>Keluar Aplikasi</Text>
              <Image
                style={styles.icon}
                source={require('../assets/icons/chevron.png')}
              />
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} style={styles.modalContainer}>
              <View style={styles.contentContainer}>
                <Image
                  style={styles.bgkeluar}
                  source={require('../assets/img/moji-cry.png')}
                />
                <Text style={styles.textkeluar}>
                  Anda yakin mau keluar aplikasi?
                </Text>
                <View style={styles.container5}>
                  <Button title="Ya.. Keluar Aplikasi" onPress={handleLogout} />
                  <Button
                    title="Batal Keluar"
                    color="red"
                    onPress={toggleModal}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  containerscroll: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    width: '100%',
    height: '100%',
  },
  container1: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0ADBBB',
  },
  container3: {
    width: '90%',
    height: 300,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  container4: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  container5: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  profil: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    resizeMode: 'cover',
    borderRadius: 50,
    marginTop: -45,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
  },
  nama: {
    fontSize: 21,
    fontFamily: 'Raleway-Bold',
  },
  statussekarang: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
  },
  icon: {
    width: 20,
    height: 20,
  },
  hiddenContent: {
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: -10,
    backgroundColor: 'white',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  bgkeluar: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    marginBottom: 5,
  },
  textkeluar: {
    fontSize: 21,
    fontFamily: 'Raleway-Bold',
    marginBottom: 5,
  },
});

export default ProfileScreen;
