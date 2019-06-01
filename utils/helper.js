import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_STUDY_REMINDER_KEY = "Flashcards:NotificationsStudyReminder";

export function createDeckObject(deckTitle) {
  return {
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  };
}

export function createCardObject(question, answer) {
  return { question, answer };
}

export function getDummyData() {
  return {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  };
}

function createNotification() {
  return {
    title: "Study with Flashcards",
    body: "📖 Don't forget to study today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export async function clearLocalNotification() {
  await AsyncStorage.removeItem(NOTIFICATION_STUDY_REMINDER_KEY);
  Notifications.cancelAllScheduledNotificationsAsync();
}

export async function setLocalNotification() {
  const dataRaw = await AsyncStorage.getItem(NOTIFICATION_STUDY_REMINDER_KEY);
  const data = JSON.parse(dataRaw);

  if (data === null) {
    const permissionsNotifications = await Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );
    if (permissionsNotifications.status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();

      // schedule notification everyday at 3:00 pm
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(15);
      tomorrow.setMinutes(0);

      // used for testing - schedule a notification 5 seconds from now
      // let now = new Date();
      // now.setDate(now.getDate());
      // now.setSeconds(now.getSeconds() + 5);

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        // time: now,
        repeat: "day"
      });

      // Notifications.presentLocalNotificationAsync(createNotification());

      AsyncStorage.setItem(
        NOTIFICATION_STUDY_REMINDER_KEY,
        JSON.stringify(true)
      );
    }
  }
}
