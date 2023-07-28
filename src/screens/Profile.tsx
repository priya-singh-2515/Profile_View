import {ScrollView, StatusBar} from 'react-native';
import React from 'react';
import ProfileSection from '../components/ProfileSection';
import PointSection from '../components/PointSection';
import BadgesSection from '../components/BadgesSection';
import SkillSection from '../components/SkillSection';
import CertificatesSection from '../components/CertificatesSection';
import TrainingSection from '../components/TrainingSection';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: '#ffff'}}>
        <ProfileSection />
        <PointSection />
        <BadgesSection />
        <SkillSection />
        <CertificatesSection />
        <TrainingSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
