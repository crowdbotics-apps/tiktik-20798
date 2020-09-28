import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={this.props.themedStyle.View_1}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen1114756")}
      >
        <Button
          textStyle={{
            fontSize: 20,
            color: "#000000",
            textAlign: "center",
            fontWeight: "bold",
            fontStyle: "italic"
          }}
          style={this.props.themedStyle.Button_2}
          onPress={() => alert("Pressed!")}
        >
          Press me if you wanna go!
        </Button>
      </TouchableOpacity>
      <View style={this.props.themedStyle.View_3} />
      <Image resizeMode="stretch" style={this.props.themedStyle.Image_4} />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  View_1: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Button_2: {
    width: "99%",
    height: 77,
    marginLeft: -6,
    marginRight: 18,
    marginTop: 5,
    marginBottom: 12,
    paddingLeft: 14,
    paddingRight: 12,
    paddingTop: -5,
    paddingBottom: 1,
    overflow: "visible",
    fontSize: 20,
    color: "#000000",
    backgroundColor: "#a7e6f6",
    fontStyle: "italic",
    fontWeight: "bold",
    borderColor: "#000000",
    borderStyle: "dotted",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: -7,
    borderBottomWidth: 5,
    borderRadius: 17,
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    textTransform: "none",
    lineHeight: 20,
    letterSpacing: 1
  },
  View_3: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_4: {
    width: -2,
    height: 99997,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 2,
    paddingBottom: 0,
    overflow: "visible",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 999999,
    borderRadius: 0
  }
}))
