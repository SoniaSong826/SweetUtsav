import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";

export default class Panel extends Component {
  constructor() {
    super();
    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout1 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded1: !this.state.expanded1 });
  };
  changeLayout2 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded2: !this.state.expanded2 });
  };
  changeLayout3 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded3: !this.state.expanded3 });
  };
  changeLayout4 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded4: !this.state.expanded4 });
  };
  changeLayout5 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded5: !this.state.expanded5 });
  };
  changeLayout6 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded6: !this.state.expanded6 });
  };

  render() {
    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../assets/white_green_background.jpg")}
      >
        <ScrollView style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.changeLayout1}
            style={styles.Btn}
          >
            <Text style={styles.title}>Mission</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.expanded1 ? null : 0,
              overflow: "hidden",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.text}>
              Sweet Utsav’s goal is to provide the Sydney community with
              authentic Indian savories and sweets and hence the motto “When
              only the best will do” Sweet Utsav does not compromise on
              ingredients and procedure and uses only the finest of ingredients
              and time-tested procedures that deliver a quality product.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.changeLayout2}
            style={styles.Btn}
          >
            <Text style={styles.title}>History</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.expanded2 ? null : 0,
              overflow: "hidden",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.text}>
              Surya Prakash Revu is the founder of Melbourne’s largest Premium
              Sweets and snacks manufacturers “Sweet India”. He commenced
              operations in 2009 opening the factory in Hoppers Crossing in
              2009. From its manufacturing base initially in Hoppers Crossing it
              has now grown into Melbourne’s largest Premium Sweets and Snacks
              Manufacturer with 6 outlets all over Australia. {"\n"}
              Sweet Utsav was born from the same person who pursued his dream of setting up
              Australia’s largest sweet and snacks manufacturing factory at
              Seven Hills, Sydney. It will cater to distribute sweets to
              selected outlets in Sydney and Canberra.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.changeLayout4}
            style={styles.Btn}
          >
            <Text style={styles.title}>Shipping and Delivery</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.expanded1 ? null : 0,
              overflow: "hidden",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.text}>
              <Text style={styles.boldOrangeText}>
                We Ship to Across All Auatralia and select International
                Destinations.{"\n"}
                {"\n"}
              </Text>
              For Deliveries within Auatralia, orders are shipped and delivered
              through our registered courier partners. We can ship with
              aggregators and leading service providers such as CurierPlease,
              Fastway, Australia Post, and others local courier and delivery
              partners across Australia. {"\n"}
              {"\n"}
              The transit time and delivery are subject to various factors such
              as destination location, off peak / peak period, week days and
              order value, which may change from time to time.{"\n"}
              {"\n"}
              <Text style={styles.boldOrangeText}>
                Order Processing: During normal days, Orders will be shipped
                within 2-3 business days (excluding Sundays and Holidays).
                During the Festive days such as DIWALI, orders preparation and
                packing might take up to 3-6 workings days.{"\n"}
                {"\n"}
              </Text>
              Packaging and Damages: We use the best packaging materials and
              methods to ensure safe delivery without any damages. However, in
              case of any rare instances of substantial damage of products in
              transit, customers are requested to send us an email along with
              the pictures of the shipment received along with purchase receipt
              to cs@sweetutsav.com.au or reach us through the Contact Us Page.
              You should raise your request within 24 hours of receiving the
              shipment in case of such damage. {"\n"}
              {"\n"}Transit Time: The Actual shipment and delivery of the
              shipment are subject to the multiple external factors, thus we
              will not be responsible for any delay in delivery by the courier
              company, as it is beyond our control. In case of any inordinate
              delay in shipment, we keep track if the same and we will escalate
              and coordinate for faster delivery of the product. Please refer
              the table below for expected time of delivery.{"\n"}
              {"\n"}
              <Text style={styles.boldOrangeText}>
                Transit and Delivery Time: {"\n"}METRO CITIES: 1-2 Days{"\n"}
                OUTER-METRO: 1-4 Days{"\n"}OUTER REIONAL: 2-7 Days{"\n"}
                {"\n"}
              </Text>
              <Text style={styles.boldText}>Order Cancellation</Text>
              {"\n"}Since the products sold on this website are food products
              perishable in nature, especially the sweets, cancellations will
              not be considered after the orders have been shipped and handed
              over to the courier. However, Customers may place the order
              cancellation request. If the order is not dispatched our Customer
              Care Centre will consider the request on case by case basis and
              Refund may be made in accordance to the policy with admin charges.
              Cancellation Request can be placed by contacting us through the
              Contact Us Page, Email with TITLE AS: CANCEL ORDER NO. XXXX in the
              subject line. We do not guarantee any fixed response time for
              order cancellations, we advise our customer to check and contact
              again if the matter is not considered within expected time.{"\n"}
              {"\n"}
              <Text style={styles.boldText}>
                Returns and Refund Policy{"\n"}
              </Text>
              Due to the Perishable Nature of the Food products, We do not
              accept any return of the products. {"\n"}
              {"\n"}In case of any quality issue or significant damage in
              Transit, the customer shall raise a request within 24 hours of
              delivering the product along with pictures of the product received
              and order receipt. The Customer Care Centre Team will investigate
              the request and will issue a replacement or refund, on a
              case-to-case basis, if the request is genuine. otherwise, the
              requests are liable to be rejected. {"\n"}
              {"\n"}
              There will be no refund for orders entertained if the Customer
              places the order, it has been shipped, but the customer refuses to
              accept the delivery of the shipment or is not available to receive
              the shipment even after 2-3 attempts by our courier partner.
              {"\n"}
              {"\n"}Refund of the Order amount in case of early cancellations
              will be initiated through the mode of payment accordingly. The
              payments will take 5-10 working days to reflect in their
              statements depending upon the bank or card issuer. It is a
              possibility that our Customer Care Team may issue a voucher or
              discount code as compensation for future purposes.{"\n"}
              {"\n"}We will not entertain any Online Review or feedback. We are
              focussed on resolving the matter individually. We advise customer
              to contact us and resolve the matter instead of raising the issue
              out via other feedbacks or reviews on internet.{"\n"}
              {"\n"}
              <Text style={styles.boldText}>
                Payment Failures during Order Placement
              </Text>
              {"\n"}Payment Failures during Order Placement During the Order
              placement, if the consumer faces any issue due to connectivity
              issues, or server-side issues from the bank/payment gateway
              providers and the order may get failed even after debit in your
              account/card. In such cases, the payment will automatically get
              refunded to you by the payment gateway in your bank/card account
              in 3-4 working days. If there is still an issue even after the
              above-mentioned timeline, please contact us for confirmation. If
              there is a successful credit available in our records, we will
              either process the order or refund the amount.{"\n"}
              {"\n"}However, in such cases, if we do not have received any
              credits in our server for such failed payments, due to the
              connectivity issues between your bank/card account and the payment
              gateway, customers are requested to follow up and request the
              respective bank for the refund of failed payments.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.changeLayout5}
            style={styles.Btn}
          >
            <Text style={styles.title}>Privacy Policy</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.expanded2 ? null : 0,
              overflow: "hidden",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.text}>
              <Text style={styles.boldText}>
                Absolute Confidentiality{"\n"}
              </Text>
              “Sweet Utsav” and/or it’s subsites (also referred to as “Sweet
              Utsav Melbourne” or “SweetUtsav” or “Website” or “We”) is totally
              committed to protecting your privacy and ensuring the security of
              any personal information received from you (“Customer” or “User”).
              At SweetUtsav, the confidentiality of our Customers is a top
              priority. We strictly adhere to the requirements of the data
              protection law established in Australia and this Privacy Policy is
              published in accordance to The Privacy Act 1988 (the Privacy Act)
              which contains 13 Australian Privacy Principles which regulate the
              way we collect, store, provide access to, use and disclose
              personal information. {"\n"}
              {"\n"}The purpose of this privacy policy statement is to confirm
              to you what personal information we collect from your visit(s) to
              our eCommerce Website, and how we protect the information that you
              provide to us when you use our eCommerce Website. You can be
              assured that SweetUtsav will use such information sensibly and
              carefully, and only in accordance with this privacy statement. We
              maintain compliance with the highest standards of website privacy,
              so our visitors/Customers can securely place orders on our
              eCommerce Website. Any information that you provide to SweetUtsav
              is subject to this Policy in place.{"\n"}
              <Text style={styles.boldText}>
                {"\n"}Your Consent{"\n"}
              </Text>
              By accessing this Website and whenever you submit any information
              to SweetUtsav, or use products and services offered by our Website
              or at our stores, you agree to be bound by the terms of this
              Privacy Policy. Please read below carefully the entire Privacy
              Policy before using this website: {"\n"}
              {"\n"}As part of providing our Services to you, We may need to
              send routine communications to you, such as order transaction
              emails and other administrative messages through email and
              notifications posted on the Website or through other means
              available, including text and other forms of messaging. Though we
              prefer to communicate with our Customers via email, as may be
              deemed necessary, you agree to receive our phone calls, related to
              your orders/request on our Website. {"\n"}
              {"\n"}When you sign up to receive our e-newsletters, We may
              periodically send emails about new products, special offers or
              other information, which you may find it interesting and
              beneficial as well. If you do not wish to receive promotional
              information from us, you can, at any time, choose to opt-out of
              receiving SweetUtsav promotional e-newsletters or emails. To
              unsubscribe from our e-newsletters, you can follow the directions
              included at the e-newsletter.{"\n"}
              {"\n"}
              You must ensure to provide us with the correct or up-to-date
              Personal Information. This will allow us to contact you for
              further correspondences with respect to your order at
              SweetUtsav.com.au. We are not responsible for any inaccurate
              information you provide to us, which may affect your shopping
              experience on our website. {"\n"}
              {"\n"}If at any time, you want to access, update, modify or
              eliminate any of your account information at SweetUtsav.com.au,
              you may do so by clicking “Sign In”, and then review/change your
              sensitive personal information as you want it to be. {"\n"}
              {"\n"}com.au may, in future, request other optional information
              from you in order to customise the Website to deliver personalised
              service to our Customers.{"\n"}
              <Text style={styles.boldText}>
                {"\n"}What Information We Collect About You{"\n"}
              </Text>
              We do not automatically collect your personally identifiable
              information. However, you might provide us with your personal and
              demographic information – including your name, gender, age,
              address, phone number, and email address (es) – in the following
              ways: {"\n"}
              {"\n"}As a New Customer, when you register/create an account,
              place your order, at SweetUtsav.com.au; As an Existing Customer,
              when you update your existing profile on SweetUtsav.com.au; When
              you sign up for e-newsletters at SweetUtsav.com.au; {"\n"}
              {"\n"}When you make a purchase and sign up for our rewards program
              at any of our exclusive stores; When you use Contact Us or submit
              your Testimonials / Enquiry / Feedback at SweetUtsav.com.au
              Personal information about an individual may include the
              following: {"\n"}
              <Text style={styles.boldOrangeText}>
                {"\n"}Name {"\n"}Address {"\n"}Email {"\n"}
                Phone number {"\n"}Age {"\n"}Sex {"\n"}Marital status {"\n"}Race
                {"\n"}Nationality {"\n"}Religious beliefs{"\n"}
              </Text>
              {"\n"}During your visit to our Website, We may automatically
              receive technical information about your computer/device,
              including your IP address, your computer operating system,
              time-zone, browser type and browser plug-in details, due to the
              communication protocol settings on the Internet.{"\n"}
              {"\n"}When you browse our Website, We may also collect information
              regarding the pages you viewed, the web addresses from which you
              arrive or click through to, time spent on certain pages, download
              errors and page response times. All this information help us
              analyse Customers’ trends and preferences and thus assist us in
              improving our service.{"\n"}
              <Text style={styles.boldText}>
                {"\n"}How We Use the Information Collected from You{"\n"}
              </Text>
              We will collect and retain your personally identifiable
              information only to the extent that it is necessary to fulfil our
              services to you. Any Personal information submitted by you to the
              eCommerce Website or collected by us will be used ONLY for the
              purposes mentioned below: {"\n"}
              {"\n"}1. To carry out our obligations arising from your requests
              for our products and services; {"\n"}2. To improve our Website’s
              functionality, and to customise your future shopping experience
              with us; {"\n"}3. To make sure that our Website content is
              presented in the manner that is most effective for you;
              {"\n"}4. To communicate with you about any changes to our
              services;
              {"\n"}5. To verify your identity and perform checks to prevent
              fraud.
              {"\n"}
              <Text style={styles.boldText}>
                {"\n"}With Whom We Share Your Information {"\n"}
              </Text>
              We do not sell, rent or exchange your any personally identifiable
              information that you provide to us through this Website with any
              third party for commercial reasons. However, We engage trusted
              online payment service partners to perform payment processing and
              authorisation services (for net banking or credit/debit card
              validation). Through your use of the SweetUtsav Services, you
              consent to our collection and transfer of your information to our
              payment service partner websites. {"\n"}
              {"\n"}As with any business, it is possible that as our business
              develops, we might sell or buy other businesses or assets. In such
              transactions, User/Customer information is typically one of the
              transferred business assets. Accordingly, in the event that
              SweetUtsav, or substantially all of our assets, is acquired by a
              third party, such information may be one of the assets that are
              transferred or acquired by a third party. Under such
              circumstances, SweetUtsav would, to the extent possible, require
              the acquiring party to follow the practices described in this
              Privacy Policy. You acknowledge that such transfers may occur and
              that any acquirer of SweetUtsav may continue to process your
              personal information as set forth in this Privacy Policy.{"\n"}
              <Text style={styles.boldText}>
                {"\n"}Who Has Access to Your Information {"\n"}
              </Text>
              Your personally identifiable information can be accessed only on a
              need-to-know basis by certain restricted staffs of SweetUtsav who
              are designated to carry out your requested activity, and all such
              staffs are bound to strict confidentiality obligations.{"\n"}
              <Text style={styles.boldText}>
                {"\n"}How We Use Cookies {"\n"}
              </Text>
              “Cookies” are small pieces of information placed by a website onto
              your electronic device. Cookies do not collect any sensitive
              personal information from you. We use cookies to analyse data
              about our web page traffic, which helps us save your preferences
              for your future visits. This allows us to customise our website
              according to your interests, which will enable us to deliver a
              more personalised service to our customers. You may choose to
              accept or decline cookies. Please be aware that by declining
              cookies you may be unable to use our website to its fullest
              capability.{"\n"}
              <Text style={styles.boldText}>
                {"\n"}Security Policy{"\n"}
              </Text>
              SweetUtsav takes careful precaution to protect our Customers’
              personal information from unauthorised access, improper use or
              disclosure or unauthorised modification. To prevent unauthorised
              access, we have put in place the latest industry-standard security
              technology and procedures to safeguard the information we collect
              online. Your personal information is encrypted and is protected
              with Secure Sockets Layer (SSL) technology, which encrypts all
              information you provide to us. We store your personally
              identifiable information on our Information and Communication
              Technology infrastructure in a secure environment. Even though we
              have taken significant steps to protect your personally
              identifiable information, no company, including our Website, can
              fully eliminate security risks associated with Personal
              Information.{"\n"}
              <Text style={styles.boldText}>
                {"\n"}Changes to Our Privacy Policy {"\n"}
              </Text>
              We may revise this Privacy Policy from time to time by updating
              this page, and so we encourage you to review it periodically to
              ensure that you agree with any such changes that we make. We will
              make best efforts to inform you of any important amendments by
              e-mail, message on the Website or notification in Your Account.
              However, it is your responsibility to check the Policy regularly
              to ensure that you agree with it and your continued use of the
              Website will be deemed to be your acceptance of any changes that
              we make. {"\n"}
              <Text style={styles.boldText}>
                {"\n"}Contact Information{"\n"}
              </Text>
              If you have questions about this Privacy Policy, please contact
              our customer service at cs@SweetUtsav.com.au
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.changeLayout6}
            style={styles.Btn}
          >
            <Text style={styles.title}>Terms and Conditions</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.expanded3 ? null : 0,
              overflow: "hidden",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.text}>
              All information displayed, transmitted or carried on Sweet Utsav
              is protected by copyright and other intellectual property laws.
              {"\n"}
              {"\n"}
              This site is designed, updated and maintained independently by
              Sweet Utsav. The content is owned by Sweet Utsav.{"\n"}
              {"\n"} You may not modify, publish, transmit, transfer, sell,
              reproduce, create derivative work from, distribute, repost,
              perform, display or in any way commercially exploit any of the
              content. {"\n"}
              {"\n"}Sweet Utsav disclaims all warranties or conditions, whether
              expressed or implied, (including without limitation implied,
              warranties or conditions of information and context). We consider
              ourselves and intend to be subject to the jurisdiction only of the
              courts of Australia.{"\n"}
              {"\n"}Sweet Utsav reserves the right, in its sole discretion, to
              suspend or cancel the service at any time if a computer virus,
              bug, or other technical problem corrupts the security, or proper
              administration of the service. {"\n"}
              {"\n"}Sweet Utsav Values the privacy of information pertaining to
              its associates. We do not use or disclose information about your
              individual visits to our website or any information that you may
              give us, such as your name, address, email address or telephone
              number, to any outside sources. {"\n"}
              {"\n"}Sweet Utsav reserves the right to refuse service to anyone
              at any time. Sweet Utsav will not use information about you
              without your permission and will provide the means for you to
              manage and control the information that you have provided. We will
              enable you to communicate your privacy concerns to us and that we
              will respond to them appropriately. {"\n"}
              {"\n"}Sweet Utsav does not disclose any personal information to
              advertisers and for other marketing and promotional purposes that
              could be used to personally.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backGround: { flex: 1 },
  text: {
    fontSize: 15,
    color: colors.black,
    fontFamily: "Roboto_400Regular",
    padding: 10,
    textAlign: "justify",
    lineHeight: 22,
  },
  boldText: {
    fontSize: 17,
    lineHeight: 22,
    color: colors.black,
    fontFamily: "Roboto_700Bold",
    padding: 10,
    textAlign: "justify",
  },
  boldOrangeText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.primary,
    fontFamily: "Roboto_700Bold",
    padding: 10,
    textAlign: "justify",
  },
  title: {
    textAlign: "center",
    color: colors.secondary,
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
  },
  Btn: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 8,
    justifyContent: "space-between",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
