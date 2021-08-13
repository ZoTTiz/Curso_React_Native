import React from 'react';

import { Fontisto } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';

import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BackGround } from '../../components/Backgroud';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListDivider } from '../../components/ListDivider';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { theme } from '../../global/styles/theme';

import Bannerimg from '../../assets/banner.png'
import { styles } from './styles';

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Antonio',
            avatar_url: 'https://github.com/ZoTTiz.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Zotti',
            avatar_url: 'https://github.com/ZoTTiz.png',
            status: 'offline'
        },
    ]

    return (
        <BackGround>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton >
                }
            />

            <ImageBackground
                source={Bannerimg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        é hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>

        </BackGround>
    );
}