import { Text, View } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../../Components/Background";
import { NextBlock } from "../Bottons";

function Introduction({ next }) {
    const css = styles["Introduction"];

    return (
        <>
            <Background index={"2"} />
            <View style={css.container}>
                <Text style={css.title}>Informação Pessoais</Text>
       
                <View style={css.btn}>
                    <NextBlock action={next} text={"Proximo"} />
                </View>
            </View>
        </>
    )
}

export default Introduction;