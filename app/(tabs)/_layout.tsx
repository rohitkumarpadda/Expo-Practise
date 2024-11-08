import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#ffd33d',
				headerStyle: {
					backgroundColor: '#25292e',
				},
				headerShadowVisible: false,
				headerTintColor: '#fff',
				tabBarStyle: {
					backgroundColor: '#25292e',
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					headerTitle: 'Sticker Smash',
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={focused ? 'home-sharp' : 'home-outline'}
							size={30}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='about'
				options={{
					headerTitle: 'About',
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={
								focused ? 'information-circle' : 'information-circle-outline'
							}
							color={color}
							size={30}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
