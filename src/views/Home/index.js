import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import styles from './styles';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

//API
import api from '../../services/api';

export default function Home(){
    const [filter, setFilter] = useState('all');
    const [tasks, setTasks] = useState ([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState();


    //ela vai fazer uma requisicao na nossa API
    //o que API devlve de resposta como resposta, ira aramzenar dentro de tasks
    async function loadTasks(){
       setLoad(true);
       await api.get(`/task/filter/${filter}/11:11:11:11:11:11`)
        .then(response => {
            setTasks(response.data)
            setLoad(false);
            
        });
    }

    async function lateVerify(){
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
         .then(response => {
             setLateCount(response.lenght)
         });
     }

    function Notification(){
        setFilter('late');
    }

    useEffect(() => {
        loadTasks();
        lateVerify();
    }, [filter])


    return (
    <View style={styles.container}>
        <Header showNotification={true} showBack={false} pressNotification={Notification} late={lateCount}/>
        <View style={styles.filter}>
            <TouchableOpacity onPress={() => setFilter('all')}>
                <Text style={
                    filter == 'all' ? styles.filterTextActived :
                    styles.filterTextInative}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('today')}>
                <Text style={
                     filter == 'today' ? styles.filterTextActived :
                     styles.filterTextInative}>Hoje</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('week')}>
                <Text style={
                    filter == 'week' ? styles.filterTextActived :
                    styles.filterTextInative}>Semana</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('month')}>
                <Text style={
                    filter == 'month' ? styles.filterTextActived :
                    styles.filterTextInative}>Mes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('year')}>
                <Text style={
                     filter == 'year' ? styles.filterTextActived :
                    styles.filterTextInative}>Ano</Text>
            </TouchableOpacity>
         </View>
        
        <View style={styles.title}>
            <Text style={styles.titleText}>TAREFAS {filter == 'late' && 'ATRASADAS' } </Text>
        </View>
        
   
        <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
           
           {
            load ?
            <ActivityIndicator color={'#ee6b26'} size={40}></ActivityIndicator>
            :
            tasks.map(t =>  
            (
                <TaskCard done={false} title={t.title} when={t.when} type={t.type}/>
            ))

           }
            
        </ScrollView>
        
        <Footer icon={`add`}/>
    </View>

    )
    
}