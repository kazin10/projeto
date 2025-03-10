import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Activity, TrendingUp, Timer, Flame } from 'lucide-react-native';

type ActivityItem = {
  id: string;
  type: string;
  duration: string;
  calories: number;
  date: string;
  icon: JSX.Element;
};

export default function AtividadesScreen() {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'Corrida',
      duration: '45 min',
      calories: 450,
      date: 'Hoje, 08:30',
      icon: <TrendingUp size={24} color="#00A86B" />,
    },
    {
      id: '2',
      type: 'Musculação',
      duration: '1h',
      calories: 300,
      date: 'Hoje, 17:00',
      icon: <Activity size={24} color="#FF9500" />,
    },
    {
      id: '3',
      type: 'Yoga',
      duration: '30 min',
      calories: 150,
      date: 'Ontem, 19:00',
      icon: <Timer size={24} color="#5856D6" />,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Suas Atividades</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Nova Atividade</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Atividades</Text>
          <Text style={styles.statPeriod}>Esta semana</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>5h 30m</Text>
          <Text style={styles.statLabel}>Tempo Total</Text>
          <Text style={styles.statPeriod}>Esta semana</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>2.450</Text>
          <Text style={styles.statLabel}>Calorias</Text>
          <Text style={styles.statPeriod}>Esta semana</Text>
        </View>
      </View>

      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Histórico Recente</Text>
        {activities.map((activity) => (
          <TouchableOpacity key={activity.id} style={styles.activityCard}>
            <View style={styles.activityIcon}>{activity.icon}</View>
            <View style={styles.activityInfo}>
              <Text style={styles.activityType}>{activity.type}</Text>
              <Text style={styles.activityDate}>{activity.date}</Text>
            </View>
            <View style={styles.activityStats}>
              <View style={styles.statItem}>
                <Timer size={16} color="#666" />
                <Text style={styles.statText}>{activity.duration}</Text>
              </View>
              <View style={styles.statItem}>
                <Flame size={16} color="#666" />
                <Text style={styles.statText}>{activity.calories} kcal</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#00A86B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    width: '31%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  statPeriod: {
    fontSize: 10,
    color: '#999',
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  activitiesContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#000',
    marginBottom: 16,
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  activityIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityInfo: {
    flex: 1,
    marginLeft: 16,
  },
  activityType: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#000',
  },
  activityDate: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 2,
  },
  activityStats: {
    alignItems: 'flex-end',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
  },
});