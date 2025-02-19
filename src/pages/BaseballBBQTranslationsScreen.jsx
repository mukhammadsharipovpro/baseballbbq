import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BaseballBBQHeader from '../components/BaseballBBQHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BaseballBBQHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Tour de France', '03.02 14:00', 'Stage 5 \n' + 'Mountain Finish')}
        {renderBroadcast('Giro d’Italia', '05.02 16:15', 'Stage 10 \n' + 'Time Trial')}
        {renderBroadcast('Vuelta a España', '07.02 18:00', 'Stage 12 \n' + 'Sprint Finish')}
        {renderBroadcast('Paris-Roubaix', '09.02 14:30', 'Classic Race \n' + 'Final Sprint')}
        {renderBroadcast('Milan-San Remo', '11.02 15:45', 'Longest One-Day Race')}
        {renderBroadcast('World Championships', '13.02 17:00', 'Elite Men \n' + 'Road Race')}
        {renderBroadcast('Liege-Bastogne-Liege', '15.02 16:30', 'Final Hill Climb')}
        {renderBroadcast('Criterium du Dauphine', '17.02 18:15', 'Stage 7 \n' + 'Mountain Pass')}
        {renderBroadcast('Strade Bianche', '19.02 14:45', 'Gravel Race')}
        {renderBroadcast('Tour of California', '21.02 17:30', 'Sprint Stage')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
  },
  league: {
    fontSize: 22,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
    opacity: 0.8,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
