#!/usr/bin/env python3
"""
Add type annotations
"""
from typing import Sequence, Any, TypeVar


T = TypeVar('T', bound=Any)

def safely_get_value(dct: dict[Any, Any], key: Any, default: T | None = None) -> Any | T:
    if key in dct:
        return dct[key]
    else:
        return default
