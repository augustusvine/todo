import React, { useState} from "react";
import {View, ScrollView, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Switch} from "react-native";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../ultils/typeIcons';
import DateTimeInput from '../../components/DateTimeInput/index.android';

import styles from "./styles";

export default function Task(){
    const [done, setDone] = useState(false);
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true}/>
            <ScrollView style={{width: '100%'}}>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={{marginVertical: 10}}>
                {
                    typeIcons.map(icon => (
                    icon != null &&
                    <TouchableOpacity>
                        <Image source={icon} style={styles.imageIcon}></Image>
                    </TouchableOpacity>
                    ))
                }
            </ScrollView>

            <Text style={styles.label}>Titulo</Text>
            <TextInput style={styles.input} maxLength={30} placeholder="lembre-me de fazer..."></TextInput>

            <Text style={styles.label}>Detalhes</Text>
            <TextInput style={styles.inputarea} maxLength={200} multiline={true} placeholder="Detalhes da atividade que eu tenho que lembrar...">

            </TextInput>

            <DateTimeInput type={'date'}></DateTimeInput>
            <DateTimeInput type={'hour'}></DateTimeInput>

            <View style={styles.inLine}>
                <View style={styles.inputInline}>
                    <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={ done ? '#00761b' : '#ee6b26'}/>
                        <Text style={styles.switchLabel}>Concluido</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUIR</Text>
                    </TouchableOpacity>
            </View>
                
                


        </ScrollView>
            
            
        </KeyboardAvoidingView>
    )
}