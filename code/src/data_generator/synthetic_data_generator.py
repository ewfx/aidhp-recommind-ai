import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta
import matplotlib.pyplot as plt

# Set random seed for reproducibility
np.random.seed(77)

# Number of customers to generate
NUM_CUSTOMERS = 100

def generate_customer_demographics():
    """Generate basic customer demographic information"""
    customer_ids = list(range(1001, 1001 + NUM_CUSTOMERS))
    
    # Generate customer names
    first_names = [
        'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Joseph', 'Thomas',
        'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Donald', 'Mark',
        'Paul', 'Steven', 'Andrew', 'Kenneth', 'Joshua', 'Kevin', 'Brian', 'George',
        'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary',
        'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon',
        'Benjamin', 'Samuel', 'Frank', 'Gregory', 'Raymond', 'Alexander', 'Patrick',
        'Jack', 'Dennis', 'Jerry', 'Tyler', 'Aaron', 'Jose', 'Adam', 'Henry', 'Nathan',
        'Douglas', 'Zachary', 'Peter', 'Kyle', 'Walter', 'Ethan', 'Jeremy', 'Keith',
        'Christian', 'Roger', 'Noah', 'Gerald', 'Carl', 'Terry', 'Sean', 'Austin',
        'Arthur', 'Lawrence', 'Jesse', 'Dylan', 'Bryan', 'Joe', 'Jordan', 'Billy',
        'Bruce', 'Albert', 'Willie', 'Gabriel', 'Logan', 'Alan', 'Juan', 'Wayne',
        'Roy', 'Ralph', 'Randy', 'Eugene', 'Vincent', 'Russell', 'Elijah', 'Louis',
        'Bobby', 'Philip', 'Johnny', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth',
        'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Betty',
        'Margaret', 'Sandra', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle',
        'Dorothy', 'Carol', 'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca',
        'Sharon', 'Laura', 'Cynthia', 'Amy', 'Angela', 'Helen', 'Anna', 'Brenda',
        'Pamela', 'Nicole', 'Emma', 'Samantha', 'Katherine', 'Christine', 'Debra',
        'Rachel', 'Catherine', 'Carolyn', 'Janet', 'Ruth', 'Maria', 'Heather', 'Diane',
        'Virginia', 'Julie', 'Joyce', 'Victoria', 'Kelly', 'Christina', 'Lauren',
        'Joan', 'Evelyn', 'Olivia', 'Judith', 'Megan', 'Cheryl', 'Martha', 'Andrea',
        'Frances', 'Hannah', 'Jacqueline', 'Ann', 'Gloria', 'Jean', 'Kathryn',
        'Alice', 'Teresa', 'Sara', 'Janice', 'Doris', 'Julia', 'Marie', 'Madison',
        'Grace', 'Judy', 'Abigail', 'Denise', 'Amber', 'Marilyn', 'Beverly', 'Theresa',
        'Sophia', 'Marie', 'Diana', 'Brittany', 'Natalie', 'Isabella', 'Charlotte',
        'Rose', 'Alexis', 'Kayla', 'Christina', 'Cathy', 'Amy', 'Angela', 'Helen',
        'Anna', 'Brenda', 'Pamela', 'Nicole', 'Emma', 'Samantha', 'Katherine',
        'Christine', 'Debra', 'Rachel', 'Catherine', 'Carolyn', 'Janet', 'Ruth',
        'Maria', 'Heather', 'Diane', 'Virginia', 'Julie', 'Joyce', 'Victoria',
        'Kelly', 'Christina', 'Lauren', 'Joan', 'Evelyn', 'Olivia', 'Judith',
        'Megan', 'Cheryl', 'Martha', 'Andrea', 'Frances', 'Hannah', 'Jacqueline',
        'Ann', 'Gloria', 'Jean', 'Kathryn', 'Alice', 'Teresa', 'Sara', 'Janice',
        'Doris', 'Julia', 'Marie', 'Madison', 'Grace', 'Judy', 'Abigail', 'Denise',
        'Amber', 'Marilyn', 'Beverly', 'Theresa', 'Sophia', 'Marie', 'Diana',
        'Brittany', 'Natalie', 'Isabella', 'Charlotte', 'Rose', 'Alexis', 'Kayla'
    ]
    
    last_names = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
        'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson',
        'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez',
        'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis',
        'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres',
        'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall',
        'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Turner', 'Phillips',
        'Evans', 'Reyes', 'Edwards', 'Collins', 'Stewart', 'Morris', 'Murphy',
        'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson',
        'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward',
        'Richardson', 'Watson', 'Brooks', 'Chavez', 'Wood', 'James', 'Bennett',
        'Gray', 'Mendoza', 'Ruiz', 'Hughes', 'Price', 'Alvarez', 'Castillo',
        'Sanders', 'Patel', 'Myers', 'Long', 'Ross', 'Foster', 'Jimenez'
    ]
    
    # Generate random names
    customer_names = []
    used_first_names = set()
    used_last_names = set()
    
    for _ in range(NUM_CUSTOMERS):
        # Select unique first name
        while True:
            first_name = np.random.choice(first_names)
            if first_name not in used_first_names:
                used_first_names.add(first_name)
                break
                
        # Select last name - allow reuse if we've used all unique names
        if len(used_last_names) >= len(last_names):
            used_last_names.clear()  # Reset the set to allow reuse
        while True:
            last_name = np.random.choice(last_names)
            if last_name not in used_last_names:
                used_last_names.add(last_name)
                break
        
        customer_names.append(f"{first_name} {last_name}")
    
    # Demographics
    ages = np.random.normal(40, 12, NUM_CUSTOMERS).astype(int)
    ages = np.clip(ages, 18, 85)  # Ensure reasonable age range
    
    genders = np.random.choice(['Male', 'Female', 'Non-binary'], 
                              size=NUM_CUSTOMERS, 
                              p=[0.48, 0.48, 0.04])
    
    income_levels = np.random.exponential(70000, NUM_CUSTOMERS).astype(int)
    income_levels = np.clip(income_levels, 15000, 500000)
    
    education_levels = np.random.choice(
        ['High School', 'Associate', 'Bachelor', 'Master', 'PhD'],
        size=NUM_CUSTOMERS,
        p=[0.25, 0.15, 0.35, 0.20, 0.05]
    )
    
    marital_statuses = np.random.choice(
        ['Single', 'Married', 'Divorced', 'Widowed'],
        size=NUM_CUSTOMERS,
        p=[0.40, 0.45, 0.10, 0.05]
    )
    
    family_sizes = np.random.choice(range(1, 7), size=NUM_CUSTOMERS, p=[0.3, 0.25, 0.2, 0.15, 0.07, 0.03])
    
    homeownership = np.random.choice(
        ['Renter', 'Owner', 'Living with Family'],
        size=NUM_CUSTOMERS,
        p=[0.35, 0.55, 0.10]
    )
    
    occupations = np.random.choice([
        'Professional', 'Service', 'Sales', 'Administrative', 
        'Healthcare', 'Education', 'Technology', 'Manufacturing',
        'Retired', 'Student', 'Self-employed'
    ], size=NUM_CUSTOMERS)
    
    # Customer tenure in years
    tenure_years = np.random.gamma(5, 1.5, NUM_CUSTOMERS)
    tenure_years = np.clip(tenure_years, 0.1, 30)  # Limit to reasonable range
    
    # Create DataFrame
    customers = pd.DataFrame({
        'customer_id': customer_ids,
        'name': customer_names,
        'age': ages,
        'gender': genders,
        'income': income_levels,
        'education': education_levels,
        'marital_status': marital_statuses,
        'family_size': family_sizes,
        'homeownership': homeownership,
        'occupation': occupations,
        'tenure_years': tenure_years.round(1)
    })
    
    return customers

def generate_financial_profiles(customers):
    """Generate financial profiles for each customer"""
    num_customers = len(customers)
    
    # Credit scores
    credit_scores = np.random.normal(700, 100, num_customers).astype(int)
    credit_scores = np.clip(credit_scores, 300, 850)
    
    # Account balances - correlated with income and credit score
    checking_balances = np.zeros(num_customers)
    savings_balances = np.zeros(num_customers)
    investment_balances = np.zeros(num_customers)
    
    for i in range(num_customers):
        income = customers['income'].iloc[i]
        cs = credit_scores[i]
        
        # Generate balances with some logical correlations
        checking_balances[i] = max(0, np.random.normal(income * 0.1, income * 0.05))
        savings_balances[i] = max(0, np.random.normal(income * 0.3, income * 0.2))
        
        # Higher income and credit score correlates with more investments
        if cs > 700 and income > 60000:
            investment_balances[i] = max(0, np.random.normal(income * 1.2, income * 0.8))
        else:
            investment_balances[i] = max(0, np.random.normal(income * 0.2, income * 0.15))
    
    # Debt-to-income ratio
    dti_ratio = np.zeros(num_customers)
    
    # Account types
    has_checking = np.random.choice([0, 1], size=num_customers, p=[0.05, 0.95])
    has_savings = np.random.choice([0, 1], size=num_customers, p=[0.15, 0.85])
    has_credit_card = np.random.choice([0, 1], size=num_customers, p=[0.20, 0.80])
    has_investment = np.random.choice([0, 1], size=num_customers, p=[0.60, 0.40])
    has_mortgage = np.zeros(num_customers)
    has_auto_loan = np.zeros(num_customers)
    has_personal_loan = np.zeros(num_customers)
    
    # Generate loan information
    mortgage_amount = np.zeros(num_customers)
    auto_loan_amount = np.zeros(num_customers)
    personal_loan_amount = np.zeros(num_customers)
    total_debt = np.zeros(num_customers)
    
    for i in range(num_customers):
        income = customers['income'].iloc[i]
        age = customers['age'].iloc[i]
        cs = credit_scores[i]
        
        # Homeowners more likely to have mortgages
        if customers['homeownership'].iloc[i] == 'Owner':
            has_mortgage[i] = np.random.choice([0, 1], p=[0.3, 0.7])
            if has_mortgage[i]:
                mortgage_amount[i] = np.random.normal(income * 3, income * 1)
        
        # Auto loan probability based on age and income
        auto_loan_prob = 0.3
        if 25 <= age <= 55:
            auto_loan_prob += 0.2
        if income > 50000:
            auto_loan_prob += 0.1
        
        has_auto_loan[i] = np.random.choice([0, 1], p=[1-auto_loan_prob, auto_loan_prob])
        if has_auto_loan[i]:
            auto_loan_amount[i] = np.random.normal(35000, 15000)
        
        # Personal loan based on credit score
        personal_loan_prob = 0.1
        if cs < 650:
            personal_loan_prob += 0.2  # Lower credit scores more likely to need personal loans
        
        has_personal_loan[i] = np.random.choice([0, 1], p=[1-personal_loan_prob, personal_loan_prob])
        if has_personal_loan[i]:
            personal_loan_amount[i] = np.random.normal(15000, 7000)
        
        # Calculate total debt
        total_debt[i] = mortgage_amount[i] + auto_loan_amount[i] + personal_loan_amount[i]
        
        # Calculate debt-to-income ratio
        if income > 0:
            dti_ratio[i] = min(1.5, (total_debt[i] * 0.05) / income)  # Assuming 5% of total debt paid annually
    
    # Average monthly expenses (as percentage of income)
    monthly_expenses_pct = np.random.beta(5, 15, num_customers) + 0.2
    monthly_expenses_pct = np.clip(monthly_expenses_pct, 0.2, 0.8)
    monthly_expenses = customers['income'] * monthly_expenses_pct / 12
    
    # Payment behaviors
    overdraft_frequency = np.zeros(num_customers)
    late_payment_frequency = np.zeros(num_customers)
    
    for i in range(num_customers):
        cs = credit_scores[i]
        
        # Overdraft frequency inversely related to credit score
        if cs < 600:
            overdraft_frequency[i] = np.random.choice([0, 1, 2, 3, 4], p=[0.3, 0.3, 0.2, 0.15, 0.05])
        elif cs < 700:
            overdraft_frequency[i] = np.random.choice([0, 1, 2], p=[0.7, 0.2, 0.1])
        else:
            overdraft_frequency[i] = np.random.choice([0, 1], p=[0.9, 0.1])
        
        # Late payment frequency inversely related to credit score
        if cs < 600:
            late_payment_frequency[i] = np.random.choice([0, 1, 2, 3], p=[0.2, 0.3, 0.3, 0.2])
        elif cs < 700:
            late_payment_frequency[i] = np.random.choice([0, 1, 2], p=[0.6, 0.3, 0.1])
        else:
            late_payment_frequency[i] = np.random.choice([0, 1], p=[0.95, 0.05])
    
    # Financial product usage and engagement
    mobile_app_usage = np.random.choice(['Never', 'Rarely', 'Monthly', 'Weekly', 'Daily'], 
                                       size=num_customers,
                                       p=[0.1, 0.15, 0.25, 0.3, 0.2])
    
    branch_visits_monthly = np.random.choice([0, 1, 2, 3, 4], 
                                           size=num_customers,
                                           p=[0.4, 0.3, 0.15, 0.1, 0.05])
    
    atm_usage_monthly = np.random.choice([0, 1, 2, 3, 4, 5], 
                                       size=num_customers,
                                       p=[0.2, 0.3, 0.2, 0.15, 0.1, 0.05])
    
    # Financial goals
    financial_goals = np.random.choice([
        'Retirement', 'Home Purchase', 'Debt Reduction', 'Education Funding',
        'Emergency Savings', 'Travel', 'Vehicle Purchase', 'Wealth Building',
        'None Specified'
    ], size=num_customers)
    
    # Create DataFrame
    financial_profiles = pd.DataFrame({
        'customer_id': customers['customer_id'],
        'credit_score': credit_scores,
        'checking_balance': checking_balances.round(2),
        'savings_balance': savings_balances.round(2),
        'investment_balance': investment_balances.round(2),
        'has_checking': has_checking,
        'has_savings': has_savings,
        'has_credit_card': has_credit_card,
        'has_investment': has_investment,
        'has_mortgage': has_mortgage,
        'has_auto_loan': has_auto_loan,
        'has_personal_loan': has_personal_loan,
        'mortgage_amount': mortgage_amount.round(2),
        'auto_loan_amount': auto_loan_amount.round(2),
        'personal_loan_amount': personal_loan_amount.round(2),
        'total_debt': total_debt.round(2),
        'debt_to_income': dti_ratio.round(3),
        'monthly_expenses': monthly_expenses.round(2),
        'overdraft_frequency': overdraft_frequency.astype(int),
        'late_payment_frequency': late_payment_frequency.astype(int),
        'mobile_app_usage': mobile_app_usage,
        'branch_visits_monthly': branch_visits_monthly,
        'atm_usage_monthly': atm_usage_monthly,
        'financial_goal': financial_goals
    })
    
    return financial_profiles

def generate_transaction_data(customers, financial_profiles, months=6):
    """Generate transaction data for customers over several months"""
    
    categories = [
        'Groceries', 'Dining', 'Utilities', 'Rent/Mortgage', 'Transportation',
        'Entertainment', 'Shopping', 'Healthcare', 'Education', 'Travel',
        'Savings/Investment', 'Income', 'Subscription', 'Insurance'
    ]
    
    transaction_list = []
    
    # Current date to backtrack from
    end_date = datetime.now()
    start_date = end_date - timedelta(days=30*months)
    
    for _, customer in customers.iterrows():
        customer_id = customer['customer_id']
        income = customer['income']
        has_checking = financial_profiles.loc[
            financial_profiles['customer_id'] == customer_id, 'has_checking'
        ].values[0]
        
        if has_checking == 0:
            continue  # Skip customers without checking accounts
        
        # Monthly income transactions
        current_date = start_date
        while current_date < end_date:
            # Add salary deposit twice a month
            if current_date.day in [1, 15]:
                salary_amount = income / 24  # Monthly income divided into 2 paychecks
                variation = np.random.normal(0, 0.05)  # 5% variation
                adjusted_salary = salary_amount * (1 + variation)
                
                transaction_list.append({
                    'customer_id': customer_id,
                    'date': current_date,
                    'amount': adjusted_salary,
                    'category': 'Income',
                    'description': 'Salary Deposit',
                    'type': 'credit'
                })
            
            # Generate 1-5 transactions per day with probability decreasing as month progresses
            daily_transactions = np.random.choice([0, 1, 2, 3, 4, 5], 
                                               p=[0.1, 0.2, 0.3, 0.2, 0.15, 0.05])
            
            for _ in range(daily_transactions):
                # Determine expense category
                category = np.random.choice(categories, p=[
                    0.15, 0.12, 0.08, 0.15, 0.1, 0.05, 0.07, 0.05, 
                    0.03, 0.05, 0.05, 0.0, 0.07, 0.03
                ])
                
                # Amount based on category and income
                if category == 'Rent/Mortgage':
                    amount = income * np.random.uniform(0.2, 0.4) / 12
                elif category == 'Groceries':
                    amount = np.random.normal(200, 100)
                elif category == 'Dining':
                    amount = np.random.normal(50, 30)
                elif category == 'Utilities':
                    amount = np.random.normal(150, 50)
                elif category == 'Transportation':
                    amount = np.random.normal(100, 70)
                elif category == 'Shopping':
                    amount = np.random.exponential(100)
                elif category == 'Subscription':
                    amount = np.random.normal(15, 10)
                elif category == 'Insurance':
                    amount = np.random.normal(200, 100)
                else:
                    # Other categories vary more widely
                    amount = np.random.exponential(income * 0.01)
                
                # Ensure positive amount
                amount = max(1, amount)
                
                transaction_list.append({
                    'customer_id': customer_id,
                    'date': current_date,
                    'amount': amount,
                    'category': category,
                    'description': f"{category} Purchase",
                    'type': 'debit'
                })
            
            current_date += timedelta(days=1)
    
    transactions_df = pd.DataFrame(transaction_list)
    transactions_df['amount'] = transactions_df['amount'].round(2)
    transactions_df = transactions_df.sort_values(['customer_id', 'date'])
    
    return transactions_df

def generate_behavioral_data(customers, financial_profiles):
    """Generate behavioral data and response history"""
    num_customers = len(customers)
    
    # Channel preferences
    channel_preferences = np.random.choice(
        ['Mobile App', 'Website', 'Branch', 'Phone', 'Email'],
        size=num_customers
    )
    
    # Email open rate
    email_open_rate = np.random.beta(5, 5, num_customers)
    
    # Customer service interaction frequency (per year)
    service_interactions = np.random.choice(
        [0, 1, 2, 3, 4, 5, 6], 
        size=num_customers,
        p=[0.3, 0.25, 0.2, 0.1, 0.08, 0.05, 0.02]
    )
    
    # Product recommendation responses
    # Generate 3 random past offers for each customer
    past_offers = []
    
    products = [
        'High-Yield Savings', 'Credit Card Upgrade', 'Personal Loan',
        'Investment Account', 'Mortgage Refinance', 'Auto Loan',
        'Retirement Planning', 'Overdraft Protection'
    ]
    
    for i, customer_id in enumerate(customers['customer_id']):
        income = customers['income'].iloc[i]
        age = customers['age'].iloc[i]
        credit = financial_profiles.loc[financial_profiles['customer_id'] == customer_id, 'credit_score'].values[0]
        
        # Determine which offers are relevant based on profile
        relevant_products = []
        if income > 100000 and age > 30:
            relevant_products.append('Investment Account')
        if credit > 700:
            relevant_products.append('Credit Card Upgrade')
        if financial_profiles.loc[financial_profiles['customer_id'] == customer_id, 'has_mortgage'].values[0] == 1:
            relevant_products.append('Mortgage Refinance')
        if income > 50000 and credit > 650:
            relevant_products.append('Personal Loan')
        if financial_profiles.loc[financial_profiles['customer_id'] == customer_id, 'savings_balance'].values[0] > 10000:
            relevant_products.append('High-Yield Savings')
        
        # Fill with random products if needed
        while len(relevant_products) < 3:
            random_product = np.random.choice(products)
            if random_product not in relevant_products:
                relevant_products.append(random_product)
        
        # Take first 3 products
        customer_products = relevant_products[:3]
        
        # For each product, record offer and response
        for product in customer_products:
            # Probability of conversion higher for relevant products
            if product in relevant_products[:2]:  # One of the first two most relevant
                conversion_prob = 0.3
            else:
                conversion_prob = 0.1
                
            # Apply email open rate effect
            conversion_prob *= email_open_rate[i]
            
            # Generate offer date in past year
            days_ago = np.random.randint(1, 365)
            offer_date = datetime.now() - timedelta(days=days_ago)
            
            # Determine if offer was converted
            converted = np.random.choice([0, 1], p=[1-conversion_prob, conversion_prob])
            
            past_offers.append({
                'customer_id': customer_id,
                'product_offered': product,
                'offer_date': offer_date,
                'offer_channel': np.random.choice(['Email', 'App', 'Branch', 'Phone']),
                'converted': converted,
                'days_to_conversion': np.random.randint(1, 30) if converted else None
            })
    
    offers_df = pd.DataFrame(past_offers)
    
    # Life events
    life_events = []
    
    event_types = [
        'Marriage', 'New Child', 'Graduation', 'Job Change',
        'Relocation', 'Retirement', 'Home Purchase'
    ]
    
    for i, customer_id in enumerate(customers['customer_id']):
        age = customers['age'].iloc[i]
        
        # Number of life events to generate (0-3)
        num_events = np.random.choice([0, 1, 2, 3], p=[0.3, 0.4, 0.2, 0.1])
        
        if num_events > 0:
            # Filter age-appropriate events
            possible_events = event_types.copy()
            
            if age < 22:
                possible_events.remove('Retirement')
                if 'Home Purchase' in possible_events:
                    possible_events.remove('Home Purchase')
            elif age < 25:
                possible_events.remove('Retirement')
            elif age < 30:
                possible_events.remove('Retirement')
            elif age > 60:
                if 'New Child' in possible_events:
                    possible_events.remove('New Child')
                if 'Graduation' in possible_events:
                    possible_events.remove('Graduation')
            
            # Select events
            selected_events = np.random.choice(possible_events, size=min(num_events, len(possible_events)), replace=False)
            
            for event in selected_events:
                # Event occurred in past 3 years
                days_ago = np.random.randint(1, 1095)
                event_date = datetime.now() - timedelta(days=days_ago)
                
                life_events.append({
                    'customer_id': customer_id,
                    'event_type': event,
                    'event_date': event_date
                })
    
    life_events_df = pd.DataFrame(life_events)
    
    # Digital engagement
    digital_engagement = pd.DataFrame({
        'customer_id': customers['customer_id'],
        'channel_preference': channel_preferences,
        'email_open_rate': email_open_rate.round(2),
        'service_interactions_yearly': service_interactions,
        'app_logins_monthly': np.random.geometric(p=0.2, size=num_customers) - 1,
        'website_visits_monthly': np.random.geometric(p=0.3, size=num_customers) - 1,
        'notification_opt_in': np.random.choice([0, 1], size=num_customers, p=[0.3, 0.7])
    })
    
    return digital_engagement, offers_df, life_events_df

def generate_recommendation_features(customers, financial_profiles, transactions_df=None):
    """Generate features specifically for recommendation engine"""
    
    num_customers = len(customers)
    customer_ids = customers['customer_id']
    
    # Product eligibility scores (0-100)
    credit_card_score = np.zeros(num_customers)
    savings_score = np.zeros(num_customers)
    investment_score = np.zeros(num_customers)
    mortgage_score = np.zeros(num_customers)
    loan_score = np.zeros(num_customers)
    
    # Calculate eligibility based on financial profiles
    for i, customer_id in enumerate(customer_ids):
        # Get relevant profile data
        profile = financial_profiles[financial_profiles['customer_id'] == customer_id]
        customer = customers[customers['customer_id'] == customer_id]
        
        income = customer['income'].values[0]
        credit_score = profile['credit_score'].values[0]
        age = customer['age'].values[0]
        
        # Credit Card Score - based on credit score, income, existing card
        has_cc = profile['has_credit_card'].values[0]
        credit_card_score[i] = min(100, (credit_score - 500) / 3.5)  # Base on credit score
        if income > 100000:
            credit_card_score[i] += 20
        elif income > 50000:
            credit_card_score[i] += 10
        if has_cc:
            credit_card_score[i] *= 0.4  # Lower score if already has a card
        
        # Savings Score - based on income, existing savings
        savings_balance = profile['savings_balance'].values[0]
        savings_score[i] = 50  # Base score
        if income > 30000:
            savings_score[i] += 20
        if savings_balance < income * 0.1:
            savings_score[i] += 30  # Higher need for savings
        elif savings_balance < income * 0.2:
            savings_score[i] += 15
        
        # Investment Score - based on age, income, existing investments
        investment_balance = profile['investment_balance'].values[0]
        
        if age < 30:
            investment_score[i] = 70  # Good time to start investing
        elif age < 50:
            investment_score[i] = 80  # Prime investment years
        else:
            investment_score[i] = 60  # Less time horizon
            
        if income > 75000:
            investment_score[i] += 20
        if investment_balance < income * 0.5:
            investment_score[i] += 10  # Room to grow investments
        
        # Mortgage Score - based on age, income, credit, existing mortgage
        has_mortgage = profile['has_mortgage'].values[0]
        if 25 <= age <= 55 and income > 50000 and credit_score > 650 and not has_mortgage:
            mortgage_score[i] = 70
            if income > 100000:
                mortgage_score[i] += 20
            if credit_score > 750:
                mortgage_score[i] += 10
        else:
            mortgage_score[i] = 30
            
        # Loan Score - based on credit, existing debt
        dti = profile['debt_to_income'].values[0]
        loan_score[i] = 50  # Base score
        if credit_score > 700:
            loan_score[i] += 30
        elif credit_score > 650:
            loan_score[i] += 15
            
        if dti < 0.2:
            loan_score[i] += 20  # Low debt burden
        elif dti > 0.4:
            loan_score[i] -= 40  # High debt burden
    
    # Next Best Action prediction
    next_best_action = []
    
    for i, customer_id in enumerate(customer_ids):
        scores = {
            'Credit Card Upgrade': credit_card_score[i],
            'High-Yield Savings': savings_score[i],
            'Investment Account': investment_score[i],
            'Mortgage': mortgage_score[i],
            'Personal Loan': loan_score[i]
        }
        
        # Select highest score action
        nba = max(scores, key=scores.get)
        next_best_action.append(nba)
    
    # Engagement probability (0-1)
    engagement_prob = np.zeros(num_customers)
    
    for i in range(num_customers):
        # Base probability
        engagement_prob[i] = np.random.beta(2, 2)
        
        # Factors affecting engagement
        mobile_usage = financial_profiles.loc[i, 'mobile_app_usage']
        if mobile_usage in ['Weekly', 'Daily']:
            engagement_prob[i] += 0.2
        
        # Cap at 1.0
        engagement_prob[i] = min(engagement_prob[i], 1.0)
    
    # Generate customer value
    customer_value = np.zeros(num_customers)
    
    for i, customer_id in enumerate(customer_ids):
        profile = financial_profiles[financial_profiles['customer_id'] == customer_id]
        income = customers.loc[customers['customer_id'] == customer_id, 'income'].values[0]
        
        # Base value from account balances
        checking = profile['checking_balance'].values[0]
        savings = profile['savings_balance'].values[0]
        investments = profile['investment_balance'].values[0]
        
        # Calculate value based on balances and product holdings
        customer_value[i] = (checking * 0.01 + savings * 0.02 + investments * 0.03) / 100
        
        # Add value for each product held
        for product in ['has_checking', 'has_savings', 'has_credit_card', 'has_investment', 
                       'has_mortgage', 'has_auto_loan', 'has_personal_loan']:
            if profile[product].values[0] == 1:
                customer_value[i] += 5
        
        # Income factor
        customer_value[i] += income / 10000
        
        # Longevity bonus
        tenure = customers.loc[customers['customer_id'] == customer_id, 'tenure_years'].values[0]
        customer_value[i] += tenure * 2
    
    recommendation_df = pd.DataFrame({
        'customer_id': customer_ids,
        'credit_card_score': credit_card_score.round(1),
        'savings_score': savings_score.round(1),
        'investment_score': investment_score.round(1),
        'mortgage_score': mortgage_score.round(1),
        'loan_score': loan_score.round(1),
        'next_best_action': next_best_action,
        'engagement_probability': engagement_prob.round(3),
        'customer_lifetime_value': customer_value.round(2)
    })
    
    return recommendation_df

def generate_all_data():
    """Generate all datasets and save to CSV files"""
    print("Generating customer demographics...")
    customers = generate_customer_demographics()
    
    print("Generating financial profiles...")
    financial_profiles = generate_financial_profiles(customers)
    
    print("Generating behavioral data...")
    digital_engagement, offers_history, life_events = generate_behavioral_data(customers, financial_profiles)
    
    print("Generating transaction data...")
    transactions = generate_transaction_data(customers, financial_profiles, months=6)
    
    print("Generating recommendation features...")
    recommendations = generate_recommendation_features(customers, financial_profiles, transactions)
    
    # Save all datasets to CSV files
    print("Saving datasets to CSV files...")
    customers.to_csv('customer_demographics.csv', index=False)
    financial_profiles.to_csv('financial_profiles.csv', index=False)
    digital_engagement.to_csv('digital_engagement.csv', index=False)
    offers_history.to_csv('offers_history.csv', index=False)
    life_events.to_csv('life_events.csv', index=False)
    transactions.to_csv('transactions.csv', index=False)
    recommendations.to_csv('recommendations.csv', index=False)
    
    print("Data generation complete!")
    
    return {
        'customers': customers,
        'financial_profiles': financial_profiles,
        'digital_engagement': digital_engagement,
        'offers_history': offers_history,
        'life_events': life_events,
        'transactions': transactions,
        'recommendations': recommendations
    }

if __name__ == "__main__":
    generate_all_data()