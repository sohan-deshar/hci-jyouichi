# Juichi
## What is this?
![Intro](Screenshots/LandingPage.png)
___
A restaurant website developed as a part of Human Computer Interaction 101 course exercise in order to practice the applications of concepts of Human Computer Interaction presented in the lecture series. The site is written in **HTML, SCSS, and Typescript (in Angular framework)**. The `dev` branch of the repo includes codes to persist the data in a backend implemented in [sohan-deshar/hci-jyuichi-full-stack](https://github.com/sohan-deshar/hci-jyuichi-full-stack) repo, whereas the `main` branch just stores the data temporarily in js objects and is thus deleted on refresh.

## Some features
- The site has a general introduction of the restaurant on it's home page. 
- The navigation bar shows what a user can do on this site. 
- The **menu** options takes the user to page showing the mock menu of the restaurant. 
- The **make Reservation** option allows user to create reservation by giving in certain details like date, time, contact etc. 
  - The **optional** sub-menu under this also allows user to choose his own seats and also add pre-orders to the reservation.
  - At the end of input, the user is shown an overview before actually creating the reservation.
- The **cancel Reservation** option can be used to cancel the reservation by giving in the reservation token and email.
- A staff site is also implemented adjacent to the regular site in order for staffs to view and delete reservations (using **Angular Material Table**) after successful authentication.

## How to run:
- Download the code.
- Run `npm install` inside project folder. This installs all the dependencies of the project. ca 400MB
- Run `ng serve`. This creates a live development server on localhost:xxxxx
- One can visit the website on local webbrowser by just giving in the link given by `ng serve`.

## Some Screenshots of the site.
![HomePage](Screenshots/HomePage.png)
___
![MenuPage](Screenshots/MenuPage.png)
___
![PersonalInfoPage](Screenshots/PersonalInfo.png)
___
![ReservationInfoPage](Screenshots/ReservationInfo.png)
___
![OptionalsPage](Screenshots/Optionals.png)
___
![SeatSelection](Screenshots/SeatSelection.png)
___
![PreOrderSelection](Screenshots/PreOrderMenu.png)
___
![ReservationOverview](Screenshots/ReservationOverview.png)
___
![SuccessfulReservation](Screenshots/Successful-Reservation.png)
___
![ReservationCancellation](Screenshots/ReservationCancellation.png)
___
![StaffLogin](Screenshots/StaffLogin.png)
___
![Staff-view-Reservation-table](Screenshots/StaffsReservationTable.png)


