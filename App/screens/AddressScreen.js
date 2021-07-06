import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	ImageBackground,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
	Dimensions,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Yup from 'yup';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppForm, AppPicker, SubmitButton, AppFormFieldWithTitle } from '../components/form';
import { ScrollView } from 'react-native-gesture-handler';
import WooCommerceAPI from 'react-native-woocommerce-api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const windowWidth = Dimensions.get('window').width;
const storeUrl = global.storeUrl == undefined ? 'https://melbourne.sweetutsav.com.au/' : global.storeUrl;

const WooCommerceApp = new WooCommerceAPI({
	url: storeUrl, // Your store URL
	ssl: false,
	consumerKey: 'ck_6a971880cc3e358b3e892536128d515795bc1ca0', // Your consumer secret
	consumerSecret: 'cs_d0355515970cabedf9ac1ac351dab8bb15435066', // Your consumer secret
	wpAPI: true, // Enable the WP REST API integration
	version: 'wc/v3', // WooCommerce WP REST API version
	queryStringAuth: true,
});

const validationSchema = Yup.object().shape({
	lastName: Yup.string().required().min(1).label('LastName'),
	firstName: Yup.string().required().min(1).label('FirstName'),
	email: Yup.string().email().required().email().label('Email'),
	address: Yup.string().label('Address'),
	city: Yup.string().label('City'),
	mobileNumber: Yup.string().required().max(10).min(10).label('MobileNumber'),
	postcode: Yup.number().label('Postcode'),
});
const states = [
	{ label: 'NSW', value: 1 }, // New South Wales
	{ label: 'QLD', value: 2 }, // Queensland
	{ label: 'SA', value: 3 }, //	South Australia
	{ label: 'TAS', value: 4 }, // Tasmania
	{ label: 'VIC', value: 5 }, // Victoria
	{ label: 'WA', value: 6 }, //	Western Australia
];

function AddressScreen({navigation}) {
	const [state, setState] = useState(states[0]);
	const [submitCart, setSubmitCart] = useState();
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	const [pickUpDate, setPickUpDate] = useState('Choose a Pick Up Date');
	const [pickUpTime, setPickUpTime] = useState('Choose a Pick Up Time');
	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};
	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleDateConfirm = (date) => {
		let today = new Date();
		const diffTime = date - today;
		const diffDays = diffTime / (1000 * 60 * 60 * 24);

		if (diffDays > 0 && diffDays <= 28) {
			setPickUpDate('Pick Up Date: ' + date.toLocaleDateString());
			hideDatePicker();
		} else {
			Alert.alert('Pick Up Date Invalid', 'Please select a date from tomorrow to 28 days from today.', [
				{
					text: 'OK',
					onPress: () => hideDatePicker(),
					style: 'cancel',
				},
			]);
		}
	};
	const handleTimeConfirm = (time) => {
		const hour = time.getHours();
		const minus = time.getMinutes();

		if (hour > 10 && hour < 19) {
			setPickUpTime(
				'Pick Up Time: ' +
					time.toLocaleTimeString('en-GB', {
						hour: 'numeric',
						minute: 'numeric',
					})
			);
			hideTimePicker();
		} else {
			Alert.alert(
				'Pick Up Time Invalid',
				'Please select a time between our working hours(11:00 a.m - 8:00 p.m).',
				[
					{
						text: 'OK',
						onPress: () => hideTimePicker(),
						style: 'cancel',
					},
				]
			);
		}
	};

	sendEmail = async (value) => {
		if (pickUpDate == 'Choose a Pick Up Date') {
			Alert.alert('Pick Up Date Missing', 'You must choose a date to pick up your order.');
		} else if (pickUpTime == 'Choose a Pick Up Time') {
			Alert.alert('Pick Up Time Missing', 'You must choose a time to pick up your order.');
		} else {
			const productList = [];

			AsyncStorage.getItem('cart', (err, cart) => {
				const cartfood = JSON.parse(cart);

				for (let i in cartfood) {
					let product = {
						product_id: cartfood[i].id,
						quantity: cartfood[i].quantity,
						variation_id: cartfood[i].variation,
					};
					productList.push(product);
				}
				setSubmitCart(productList);

				if (productList.length == 0) {
					Alert.alert('Cart Empty', 'Please add products into the cart.');
				} else {
					const newOrder = {
						payment_method: 'pk',
						payment_method_title: 'Pay at Pick Up',
						set_paid: false,
						status: 'processing',
						billing: {
							first_name: value.firstName,
							last_name: value.lastName,
							address_1: value.address,
							address_2: '',
							city: value.city,
							state: state.label,
							postcode: value.postcode,
							country: 'AU',
							email: value.email,
							phone: value.mobileNumber,
						},
						line_items: productList,
						customer_note: 'Pick up time: ' + pickUpDate + ' ' + pickUpTime + ' ' + value.message,
					};

					WooCommerceApp.post('orders', newOrder)
						.then((data) => {
							console.warn(data);
						})
						.catch((error) => {
							console.log(error);
						});
					Alert.alert('Order Sent', 'Thank you! Your order has been sent to us. We will contact you soon!');
				}
				AsyncStorage.setItem('cart',JSON.stringify([]));
			});
		}
	};
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/lightOrange_background.jpg')}>
			<KeyboardAwareScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
				<AppText style={styles.text}>
					{pickUpDate}
					{'\n'}
					{pickUpTime}
				</AppText>
				<View style={styles.rowContainer}>
					<View>
						<TouchableOpacity style={styles.button} onPress={showDatePicker}>
							<View style={styles.iconwithtext}>
								<MaterialCommunityIcons
									name="calendar-month"
									size={25}
									color={colors.white}
								></MaterialCommunityIcons>
								<AppText style={styles.icontext}>Pick Date</AppText>
							</View>
						</TouchableOpacity>

						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={handleDateConfirm}
							onCancel={hideDatePicker}
						/>
					</View>

					<View>
						<TouchableOpacity style={styles.button} onPress={showTimePicker}>
							<View style={styles.iconwithtext}>
								<MaterialCommunityIcons
									name="clock-time-four-outline"
									size={25}
									color={colors.white}
								></MaterialCommunityIcons>
								<AppText style={styles.icontext}>Pick Time</AppText>
							</View>
						</TouchableOpacity>

						<DateTimePickerModal
							isVisible={isTimePickerVisible}
							mode="time"
							onConfirm={handleTimeConfirm}
							onCancel={hideTimePicker}
						/>
					</View>
				</View>
				<AppForm
					style={styles.form}
					initialValues={{
						lastName: '',
						firstName: '',
						email: '',
						address: '',
						city: '',
						mobileNumber: '',
						postcode: '',
						state: '',
						message: '',
					}}
					onSubmit={(values) => {
						sendEmail(values);
						navigation.navigate("Home")
					}}
					validationSchema={validationSchema}
				>
					<View style={styles.rowContainer}>
						<AppFormFieldWithTitle name="firstName" title="First Name" />
						<AppFormFieldWithTitle name="lastName" title="Last Name" />
					</View>
					<AppFormFieldWithTitle name="mobileNumber" title="Mobile Number" keyboardType="numeric" />
					<AppFormFieldWithTitle name="email" title="Email" />
					<AppFormFieldWithTitle name="address" title="Address (Optional)" />
					<View style={styles.rowContainer}>
						<AppFormFieldWithTitle name="city" title="City" />
						<View style={styles.pickerContainer}>
							<AppText style={styles.stateText}>State</AppText>
							<AppPicker
								items={states}
								name="state"
								placeholder="Select"
								items={states}
								selectedItem={state}
								onSelectItem={(item) => setState(item)}
							/>
						</View>
						<AppFormFieldWithTitle keyboardType="numeric" name="postcode" title="Postcode" />
					</View>

					<AppFormFieldWithTitle name="message" title="Additional Message (Optional)" />
					<SubmitButton style={styles.submitButton} title="Place Order" />
				</AppForm>
			</KeyboardAwareScrollView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
	},
	container: {
		width: '100%',
		paddingHorizontal: 10,
	},
	circle: {
		marginTop: 20,
		width: 120,
		backgroundColor: colors.white,
		height: 120,
		borderRadius: 60,
		borderColor: colors.lightGray,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	addSign: {
		fontSize: 70,
		fontFamily: 'Roboto_100Thin',
	},
	photoText: {
		fontSize: 16,
		marginTop: 7,
	},
	rowContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	pickerContainer: {
		flex: 1,
		alignItems: 'flex-start',
		marginTop: 10,
		marginHorizontal: 10,
	},
	stateText: {
		color: colors.black,
		fontSize: 15,
	},
	submitButton: {
		paddingTop: 20,
		paddingBottom: 80,
	},
	button: {
		height: 50,
		width: windowWidth * 0.4,
		backgroundColor: colors.primary,
		paddingHorizontal: 17,
		borderRadius: 10,
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: colors.darkGray,
		shadowOpacity: 0.4,
		shadowRadius: 2,
		elevation: 2,
		shadowOffset: { width: 1, height: 1 },
	},
	iconwithtext: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	icontext: {
		fontFamily: 'Roboto_700Bold',
		fontSize: 23,
		color: colors.white,
		paddingHorizontal: 5,
	},
	text: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		textAlign: 'center',
		color: colors.black,
		fontSize: 19,
		marginTop: 20,
	},
});
export default AddressScreen;
