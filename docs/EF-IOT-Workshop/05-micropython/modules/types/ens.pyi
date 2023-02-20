# Based off: https://github.com/DFRobot/DFRobot_ENS160
# Peter Johnston at Core Electronics June 2022
# Modified by Balthasar Hofer February 2023

from collections import namedtuple
from struct import unpack
from typing import Literal, NamedTuple



class AQI_Tuple:
    value: float
    rating: Literal['invalid','excellent','good','moderate','poor','unhealthy']

class ECO2_Tuple:
    value: float
    rating: Literal['invalid', 'excellent', 'good', 'fair', 'poor', 'bad']

def _read_bit(x: int, n: int) -> bool: ...

def _read_crumb(x, n): ...

def _read_tribit(x, n): ...

def _set_bit(x, n): ...

def _clear_bit(x, n): ...

def _write_bit(x, n, b): ...

class ENS160(object):
    def __init__(self, i2c, address=Literal, intdat=False, intgpr=False, int_cfg=0, intpol=0, temperature=25.0, humidity=50.0): ...
        
    def _read(self, register: Literal, length=1, bytestring=False) -> bytes: ...

    def _write(self, register: Literal, data: Literal | bytes): ...

    def _read_int(self, register: Literal, length=1) -> int: ...

    def _write_int(self, register: Literal, integer: int, length=1): ...

    def _read_data(self) -> tuple: ...

    def reset(self) -> bool: ...
    
    @property    
    def humidity(self) -> float: ...
    
    @humidity.setter
    def humidity(self, humidity: float): ...
    
    @property
    def temperature(self) -> float: ...
    
    @temperature.setter
    def temperature(self, temperature: float): ...
    
    @property
    def status(self) -> tuple: ...
    
    @property
    def status_statas(self) -> int: ...
    @property
    def status_stater(self) -> int: ...
    
    @property
    def status_newdat(self) -> int: ...
    
    @property
    def status_newgpr(self) -> int: ...
    
    @property
    def status_validity_flag(self) -> int: ...
    
    @property
    def operation(self) -> Literal['operating ok', 'warm-up', 'initial start-up', 'no valid output']: ...
    
    @property
    def aqi(self) -> AQI_Tuple: ...

    @property
    def tvoc(self) -> int: ...
    
    @property
    def eco2(self) -> ECO2_Tuple: ...
        