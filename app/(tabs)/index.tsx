import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Dashboard = () => {
  const ProgressCard = ({ title, value }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );

  const ActionItem = ({ icon, label }) => (
    <TouchableOpacity style={styles.actionItem}>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
      <Text style={styles.arrow}>&#x279C;</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>

      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://cdn.usegalileo.ai/sdxl10/9a797f04-7ddc-482d-beb3-07331fff1ae0.png",
          }}
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          <Text style={styles.bannerText}>Motivation</Text>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Your progress</Text>
        <View style={styles.progressContainer}>
          <ProgressCard title="Streaks" value="4" />
          <ProgressCard title="Habits formed" value="2" />
          <ProgressCard title="Minutes tracked" value="120" />
        </View>

        <Text style={styles.sectionTitle}>Set a goal</Text>
        <ActionItem icon="🔥" label="Get a streak" />
        <ActionItem icon="⏱️" label="Start tracking" />

        <Text style={styles.sectionTitle}>Resources</Text>
        <ActionItem icon="📖" label="Articles & Videos" />
        <ActionItem icon="🌐" label="Community" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { padding: 16, backgroundColor: "white" },
  headerTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#0d151c",
  },
  banner: {
    height: 220,
    justifyContent: "flex-end",
    padding: 16,
    margin: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  bannerImage: { borderRadius: 12 },
  bannerText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0d151c",
    marginVertical: 16,
    marginHorizontal: 16,
  },
  progressContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginHorizontal: 16,
  },
  card: {
    flex: 1,
    minWidth: 158,
    padding: 16,
    backgroundColor: "#e7eef4",
    borderRadius: 12,
    marginBottom: 8,
  },
  cardTitle: { fontSize: 14, color: "#0d151c", fontWeight: "500" },
  cardValue: { fontSize: 24, color: "#0d151c", fontWeight: "bold" },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#f8fafc",
    padding: 16,
    paddingLeft: 0,
    paddingBottom: 0,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e7eef4",
    borderRadius: 8,
  },
  icon: { fontSize: 20 },
  actionLabel: { flex: 1, marginLeft: 16, fontSize: 16, color: "#0d151c" },
  arrow: { fontSize: 20, color: "#0d151c" },
});

export default Dashboard;
