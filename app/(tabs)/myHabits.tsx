import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

// Habit Card Component
const HabitCard = ({ title, status, buttonText, imageUrl, progress }) => (
  <View style={styles.habitContainer}>
    <View style={styles.cardContent}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>{status}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
    <View style={styles.progressContainer}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressText}>Progress</Text>
        <Text style={styles.progressPercentage}>{progress}%</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
    </View>
  </View>
);

// Habits Screen
const HabitsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bad Habits</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search habits"
          placeholderTextColor="#49779c"
        />
      </View>
      <ScrollView>
        <HabitCard
          title="Eating fast food"
          status="In progress"
          buttonText="Break this habit"
          imageUrl="https://cdn.usegalileo.ai/sdxl10/cf5bfd48-0a5a-4266-9529-c96ebcc15547.png"
          progress={50}
        />
        <HabitCard
          title="Sleeping <7 hours"
          status="Broken"
          buttonText="Fix this habit"
          imageUrl="https://cdn.usegalileo.ai/sdxl10/354ec3b8-bd5f-4e60-b070-cf28714ff88c.png"
          progress={0}
        />
        <HabitCard
          title="Drinking soda"
          status="Broken"
          buttonText="Fix this habit"
          imageUrl="https://cdn.usegalileo.ai/sdxl10/92315320-3b3a-459f-9b14-3bd059344776.png"
          progress={0}
        />
      </ScrollView>
    </View>
  );
};

export default function myHabits() {
  return <HabitsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: "#e7eef4",
    padding: 12,
    borderRadius: 12,
    color: "#0d151c",
  },
  habitContainer: {
    margin: 16,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 2,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0d151c",
  },
  status: {
    fontSize: 14,
    color: "#49779c",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#e7eef4",
    padding: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  buttonText: {
    color: "#0d151c",
    fontSize: 14,
  },
  image: {
    flex: 1,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
  progressContainer: {
    marginTop: 16,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressText: {
    fontSize: 16,
    color: "#0d151c",
  },
  progressPercentage: {
    fontSize: 14,
    color: "#0d151c",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#cedde8",
    borderRadius: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#2094f3",
    borderRadius: 4,
  },
});
