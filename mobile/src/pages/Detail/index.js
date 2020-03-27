import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const route = useRoute();
    const navigation = useNavigation();
    const incident = route.params.incident;
    const valor = Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }).format(incident.value);

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" no valor de "${valor}".`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }

    function sendWhatsApp() {
        const fone = incident.whatsapp.replace('-', '').replace('-', '');
        Linking.openURL(`whatsapp://send?phone=${fone}&text=${message}`);
    }

    return (
        <View style={styles.container} >

            <View style={styles.header} >
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041"></Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty, { marginTop: 0 }}>
                    ONG:
                    </Text>
                <Text style={styles.incidentValue}>
                    {incident.name} de {incident.city}
                </Text>
                <Text style={styles.incidentProperty}>
                    CASO:
                    </Text>
                <Text style={styles.incidentValue}>
                    {incident.title}
                </Text>
                <Text style={styles.incidentProperty}>
                    VALOR:
                    </Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR',
                        {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTile}>
                    Salve o dia!
                    </Text>
                <Text style={styles.heroTitle}>
                    Seja o herói desse caso.
                    </Text>
                <Text style={styles.heroDescription}>
                    Entre em contato:
                    </Text>
            </View>

            <View style={styles.actions} >
                <TouchableOpacity
                    style={styles.action}
                    onPress={sendWhatsApp}>
                    <Text style={styles.actionText}>WhatspApp</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.action}
                    onPress={sendMail}>
                    <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}