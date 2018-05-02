int relayPin1 = 7;

int refillFloatPin = 2; // tape
int sumpFloatPin = 3; // no tape
long lastRunMillis = 0;
long currentMillis = millis();
bool on = false;
int count = 0;

void setup() {
  Serial.begin(9600);
  pinMode(relayPin1, OUTPUT);      // sets the digital pin as output

  pinMode(refillFloatPin, INPUT);
  pinMode(sumpFloatPin, INPUT);

  digitalWrite(relayPin1, HIGH);        // Prevents relays from starting up engaged
}

void loop() {
  int refillFloatVal = digitalRead(refillFloatPin);
  int sumpFloatVal = digitalRead(sumpFloatPin);

  if (refillFloatVal == LOW && sumpFloatVal == HIGH) {
    Serial.println(count);
    if (!on) {
      on = true;
      count = 0;
    } else {
      count++;
      if (count < 60) {
        digitalWrite(relayPin1, LOW);
      } else {
        digitalWrite(relayPin1, HIGH);
        delay(1800000);
        on = false;
      }
    }

  } else {
    digitalWrite(relayPin1, HIGH);
    on = false;
  }
  delay(1000);
}
