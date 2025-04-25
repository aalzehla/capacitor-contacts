package com.aalzehla.capacitor.contacts.utils;

public interface Visitable<T> {
    void accept(Visitor<T> visitor);
}
