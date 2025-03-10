import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Activity, Utensils, Moon } from 'lucide-react-native';

export default function HomeScreen() {
  const activityData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bom dia,</Text>
        <Text style={styles.name}>João Silva</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Activity size={24} color="#00A86B" />
          <Text style={styles.statValue}>7.532</Text>
          <Text style={styles.statLabel}>Passos</Text>
        </View>

        <View style={styles.statCard}>
          <Utensils size={24} color="#FF9500" />
          <Text style={styles.statValue}>1.850</Text>
          <Text style={styles.statLabel}>Calorias</Text>
        </View>

        <View style={styles.statCard}>
          <Moon size={24} color="#5856D6" />
          <Text style={styles.statValue}>7h 30m</Text>
          <Text style={styles.statLabel}>Sono</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Atividade Semanal</Text>
        <LineChart
          data={activityData}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 168, 107, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Resumo do Dia</Text>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>
            Você está indo muito bem! Alcançou 75% da sua meta diária de passos e consumiu 1.850 calorias.
            Continue assim!
          </Text>
        </View>
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
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
  name: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Inter_700Bold',
    marginTop: 4,
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
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  chartContainer: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  summaryContainer: {
    padding: 16,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 12,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Inter_400Regular',
    lineHeight: 24,
  },
});