'''Reference: https://www.golinuxcloud.com/python-argparse/'''
import sys  # for basic argument parser
import argparse

# Initialize the ArgumentParser
parser = argparse.ArgumentParser(description="A program to demonstrate optional " +
"positional arguments.")

# Define a required positional argument 'required_arg'
parser.add_argument("required_arg", help="This argument is required")

# Define an optional positional argument 'optional_arg'
parser.add_argument("optional_arg", nargs='?', default="default_value",
  help="This argument is optional")

# Parse the arguments
args = parser.parse_args()

# Accessing the parsed arguments
print(f"Required Argument: {args.required_arg}")
print(f"Optional Argument: {args.optional_arg}")
''' 
try: python argument_sample.py req_value opt_value
output:
Required Argument: req_value
Optional Argument: opt_value
'''

# use of sys.argv to extract the script name & positional arguments
print(f"Script name: {sys.argv[0]}")
print(f"Positional argument1: {sys.argv[1]}")
print(f"Positional argument2: {sys.argv[2]}")

'''
try: python argument_sample.py req_value opt_value
output:
Script name: argument_sample.py
Positional argument1: req_value
Positional argument2: opt_value
'''
