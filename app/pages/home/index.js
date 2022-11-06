import React from 'react'
import { View, Text } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../components/home/CarouselCardsItem'
import styles from './styles';
import SelectList from 'react-native-dropdown-select-list'

export default function Home({ navigation }) {

    //Dropdown
    const [selected, setSelected] = React.useState("");
    const dataDropdown = [{ key: '1', value: 'Condominio 1' }, { key: '2', value: 'Condominio 2' }];

    //Img Carousel
    const dataImg = [
        {
            title: "Grafico X",
            body: "O GRAFICO X REPRESENTA...",
            imgUrl: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Q1','Q2','Q3','Q4'], datasets:[{label:'Users',data:[50,60,70,180]},{label:'Revenue',data:[100,200,300,400]}]}}&white&width=260&height=210&devicePixelRatio=5.0",
        },
        {
            title: "Grafico Y",
            body: "O GRAFICO Y REPRESENTA........",
            imgUrl: "https://quickchart.io/chart?c={type:'line',data:{labels:['Q1','Q2','Q3','Q4'], datasets:[{label:'Users',data:[50,60,70,180]},{label:'Revenue',data:[100,200,300,400]}]}}&white&width=260&height=210&devicePixelRatio=5.0",
        },
        {
            title: "GRAFICO Z",
            body: "O GRAFICO Z REPRESENTA",
            imgUrl: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Q1','Q2','Q3','Q4'], datasets:[{label:'Users',data:[50,60,70,180]},{label:'Revenue',data:[100,200,300,400]}]}}&white&width=260&height=210&devicePixelRatio=5.0",
        },
    ];
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
        <View style={styles.container}>
            <Text style={styles.textAcesso}>ADMINISTRADOR</Text>
            <View style={styles.dropdownCondominio}>
                <SelectList
                    setSelected={setSelected}
                    data={dataDropdown}
                    onSelect={() => alert(selected)} />
            </View>
            <View>
                <Carousel
                    layoutCardOffset={1}
                    ref={isCarousel}
                    data={dataImg}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />
                <Pagination
                    dotsLength={dataImg.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 12,
                        height: 12,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>
        </View>
    )
}