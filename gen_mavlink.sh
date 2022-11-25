#!/bin/bash
mkdir -p src
python3 mavlink/pymavlink/tools/mavgen.py --lang=JavaScript_NextGen --wire-protocol=2.0 --output=src/mavlink mavlink/message_definitions/v1.0/common.xml