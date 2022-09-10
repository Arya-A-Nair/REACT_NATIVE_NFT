import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

import { COLORS, NFTData } from "../constants";

const Home = () => {
	const [nftData,setNftData]=useState(NFTData)

	const handleSearch=(value)=>{
		if (value.length==0) return setNftData(NFTData);
		const filteredData=NFTData.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
		if(filteredData.length){
			setNftData(filteredData)
		}else{
			setNftData(NFTData)
		}
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar background={COLORS.primary} />
			<View style={{flex:1}}>
				<View style={{zIndex:0}}>
					<FlatList
						data={nftData}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
						renderItem={({item})=>{
							return <NFTCard data={item}/>
						}}
					/>
				</View>
				<View style={{
					position:"absolute",
					top:0,
					bottom:0,
					left:0,
					right:0,
					zIndex:-1,
				}}>
					<View style={{height:300,backgroundColor:COLORS.primary}}/>
					<View style={{flex:1,backgrounndColor:COLORS.white}}/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
