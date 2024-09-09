import { Appbar } from "react-native-paper";

export default function AppBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="MD Nav Demo" />
      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("Second")}
        />
      ) : null}
    </Appbar.Header>
  );
}
