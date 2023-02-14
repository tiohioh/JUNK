#include <driver/dac.h> //ESP32 driver

const unsigned char sin16[] = {0, 9, 37, 79, 128, 176, 218, 246, 255, 246, 218, 176, 128, 79, 37, 9};
const unsigned char triangle16[] = {0, 9, 37, 79, 128, 176, 218, 246, 0, 9, 37, 79, 128, 176, 218, 246};



int ringAlert(unsigned int warnValue) {
  dac_output_enable( DAC_CHANNEL_1 );

  unsigned char nowPtr = 16;
  while(nowPtr-- > 0){
    bool nowVal = warnValue >> nowPtr & 0B1;
    unsigned int duration = nowVal ? 300 : 100;//unit [ms]
    unsigned int time = 0;
    char sinPtr;
    while(time++ < duration){
      sinPtr = 0;
      while(sinPtr++ < 16){
        dac_output_voltage(DAC_CHANNEL_1, sin16[sinPtr]);//select output pin or signal type
        ets_delay_us(67);
      }
    }
    delay(200);
  }
  return 0;
}
