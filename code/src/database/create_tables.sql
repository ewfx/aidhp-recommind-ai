-- Customer Demographics Table
CREATE TABLE customer_demographics (
    customer_id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    age INTEGER,
    gender VARCHAR(20),
    income INTEGER,
    education VARCHAR(50),
    marital_status VARCHAR(20),
    family_size INTEGER,
    homeownership VARCHAR(50),
    occupation VARCHAR(50),
    tenure_years DECIMAL(5,2)
);

-- Financial Profiles Table
CREATE TABLE financial_profiles (
    customer_id INTEGER PRIMARY KEY,
    credit_score INTEGER,
    checking_balance DECIMAL(12,2),
    savings_balance DECIMAL(12,2),
    investment_balance DECIMAL(12,2),
    has_checking BOOLEAN,
    has_savings BOOLEAN,
    has_credit_card BOOLEAN,
    has_investment BOOLEAN,
    has_mortgage BOOLEAN,
    has_auto_loan BOOLEAN,
    has_personal_loan BOOLEAN,
    mortgage_amount DECIMAL(12,2),
    auto_loan_amount DECIMAL(12,2),
    personal_loan_amount DECIMAL(12,2),
    total_debt DECIMAL(12,2),
    debt_to_income DECIMAL(5,3),
    monthly_expenses DECIMAL(10,2),
    overdraft_frequency INTEGER,
    late_payment_frequency INTEGER,
    mobile_app_usage VARCHAR(20),
    branch_visits_monthly INTEGER,
    atm_usage_monthly INTEGER,
    financial_goal VARCHAR(50)
);

-- Life Events Table
CREATE TABLE life_events (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    event_type VARCHAR(50),
    event_date DATE
);

-- Digital Engagement Table
CREATE TABLE digital_engagement (
    customer_id INTEGER PRIMARY KEY,
    channel_preference VARCHAR(50),
    email_open_rate DECIMAL(4,2),
    service_interactions_yearly INTEGER,
    app_logins_monthly INTEGER,
    website_visits_monthly INTEGER,
    notification_opt_in BOOLEAN
);

-- Offers History Table
CREATE TABLE offers_history (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    product_offered VARCHAR(50),
    offer_date DATE,
    offer_channel VARCHAR(20),
    converted BOOLEAN,
    days_to_conversion INTEGER
);

-- Transactions Table
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    date DATE,
    amount DECIMAL(10,2),
    category VARCHAR(50),
    description VARCHAR(200),
    type VARCHAR(10)
);

-- Recommendations Table
CREATE TABLE recommendations (
    customer_id INTEGER PRIMARY KEY,
    credit_card_score DECIMAL(5,1),
    savings_score DECIMAL(5,1),
    investment_score DECIMAL(5,1),
    mortgage_score DECIMAL(5,1),
    loan_score DECIMAL(5,1),
    next_best_action VARCHAR(50),
    engagement_probability DECIMAL(5,3),
    customer_lifetime_value DECIMAL(10,2)
);