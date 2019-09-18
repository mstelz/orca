int relayPin1 = 7; // Pin to control power to ATO Pump

int refillFloatPin = 2; // tape
int sumpFloatPin = 3; // no tape
long lastRunMillis = 0;
long currentMillis = millis();
bool on = false; // is the ATO Pump currently on
int count = 0;

void setup() {
  Serial.begin(9600);
  pinMode(relayPin1, OUTPUT);      // sets the digital pin as output

  pinMode(refillFloatPin, INPUT); // ATO Reservoir Float switch
  pinMode(sumpFloatPin, INPUT);   // Sump Float Switch

  digitalWrite(relayPin1, HIGH);  // Prevents relays from starting up engaged
}

void loop() {
  int refillFloatVal = digitalRead(refillFloatPin); 
  int sumpFloatVal = digitalRead(sumpFloatPin);

  // Checks ATO Reservoir has enough water and the Sump is reading low on water
  if (refillFloatVal == LOW && sumpFloatVal == HIGH) {
    Serial.println(count);
    if (!on) {
      on = true;
      count = 0;
    } else {
      count++;
      if (count < 60) { // Only run ATO Pump max of 60 seconds before pausing
        digitalWrite(relayPin1, LOW);
      } else {
        digitalWrite(relayPin1, HIGH);
        delay(1800000); // Pause 30 minutes
        on = false;
      }
    }

  } else {
    digitalWrite(relayPin1, HIGH);
    on = false;
  }
  delay(1000);
}
